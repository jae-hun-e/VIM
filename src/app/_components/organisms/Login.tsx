import { useForm } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import LoginIcon from '@assets/btn/btn_login.svg';
import LoginOffIcon from '@assets/btn/btn_login_off.svg';
import AIM from '@assets/logo/Icon_AIM.svg';
import { LoginFormProps } from '@customTypes/reqestType';
import { ResponseType, ResponseLogin } from '@customTypes/ResponseType';
import { postLogin } from '@services/post/postFormData';
import { cls } from '@utils/utils';

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch
  } = useForm<LoginFormProps>();
  const router = useRouter();
  const { mutate } = useMutation<
    ResponseType<ResponseLogin>,
    AxiosError<ResponseType<ResponseLogin>>,
    LoginFormProps,
    unknown
  >({
    mutationFn: postLogin,
    onSuccess: () => {
      localStorage.setItem('login', 'true');
      router.push('/dashboard/admin');
    },
    onError: (error) => {
      const errorsInfo = error.response?.data.errors;
      if (!errorsInfo) return;
      for (const { field, message } of errorsInfo) {
        setError(
          field === 'username' ? 'username' : 'password',
          { type: 'custom', message },
          { shouldFocus: true }
        );
      }
    }
  });

  const onLogin = () => !!(watch('username') && watch('password'));

  return (
    <article className="flex flex-col items-center justify-center text-black w-[961px] h-[685px] rounded-[48px] bg-white shadow-lg">
      <AIM width="145px" height="97px" />
      <form
        onSubmit={handleSubmit((data) => mutate(data))}
        className="flex flex-col gap-[8px]">
        <label htmlFor="username">ID</label>
        <input
          id="username"
          type="text"
          placeholder="id를 입력해주세요"
          {...register('username')}
          className={cls(
            'w-[521px] h-[51px] rounded-[24px] px-[20px]',
            errors?.username
              ? 'border-[1px] border-red-500 bg-fail-2'
              : 'bg-gray-2'
          )}
        />
        <label htmlFor="password">Password</label>
        <input
          id="pw"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register('password')}
          className={cls(
            'w-[521px] h-[51px] rounded-[24px] px-[20px]',
            errors?.password
              ? 'border-[1px] border-red-500 bg-fail-2'
              : 'bg-gray-2'
          )}
        />

        <button
          type="submit"
          className="flex justify-center mt-[48px]"
          disabled={!onLogin()}>
          {onLogin() ? <LoginIcon /> : <LoginOffIcon />}
        </button>

        <p>{errors?.username?.message}</p>
        <p>{errors?.password?.message}</p>
      </form>
    </article>
  );
};

export default Login;
