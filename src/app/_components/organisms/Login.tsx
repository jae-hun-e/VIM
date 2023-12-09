import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import AIM from '@assets/logo/Icon_AIM.svg';
import LoginIcon from '@assets/btn/btn_login.svg';
import LoginOffIcon from '@assets/btn/btn_login_off.svg';
import { cls } from '@utils/util';
import { useMutation } from '@tanstack/react-query';
import { postLogin } from '@services/post/postFormData';
import { LoginFormProps } from '@/app/_types/reqestType';

const Login = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    setError,
    formState: { errors },
    watch
  } = useForm<LoginFormProps>();
  const router = useRouter();
  const { mutate, isError, error } = useMutation({ mutationFn: postLogin });
  const onSubmit = (data: LoginFormProps) => {
    if (!data.username) {
      setFocus('username');
      setError('username', { type: 'custom', message: 'username를 입력해주세요.' });
      return;
    }

    if (!data.password) {
      setFocus('password');
      setError('password', { type: 'custom', message: 'password를 입력해주세요.' });
      return;
    }

    console.log('error', isError, error);
    mutate(data, {
      onSuccess: () => router.push('/dashboard/admin'),
      onError: (error) => {
        console.log(error);
        // console.log('error msg', error);
      }
    });

    // isSuccess && router.push('/dashboard/admin');
  };

  const onLogin = () => !!(watch('username') && watch('password'));

  return (
    <article className="flex flex-col items-center justify-center text-black w-[961px] h-[685px] rounded-[48px] bg-white shadow-lg">
      <AIM width="145px" height="97px" />
      <form className="flex flex-col gap-[8px] " onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">ID</label>
        <input
          id="username"
          type="text"
          placeholder="id를 입력해주세요"
          {...register('username', { required: true })}
          className={cls(
            errors?.username ? 'border-[1px] border-red-500 bg-fail-2' : '',
            'w-[521px] h-[51px] bg-gray-2 rounded-[24px] px-[20px]'
          )}
        />
        <label htmlFor="password">Password</label>
        <input
          id="pw"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register('password')}
          className={cls(
            errors?.password ? 'border-[1px] border-red-500 bg-fail-2' : '',
            'w-[521px] h-[51px] bg-gray-2 rounded-[24px] px-[20px]'
          )}
        />

        <button type="submit" className="flex justify-center mt-[48px]" disabled={!onLogin()}>
          {onLogin() ? <LoginIcon /> : <LoginOffIcon />}
        </button>

        {errors?.username?.message || errors?.password?.message}
      </form>
    </article>
  );
};

export default Login;
