import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import AIM from '@assets/Icon_AIM.svg';
import LoginIcon from '@assets/btn_login.svg';
import LoginOffIcon from '@assets/btn_login_off.svg';
import { cls } from '@utils/util';
interface IForm {
  id: string;
  pw: string;
}
const Login = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    setError,
    formState: { errors },
    watch
  } = useForm<IForm>();
  const router = useRouter();
  const onSubmit = (data: IForm) => {
    if (!data.id) {
      setFocus('id');
      setError('id', { type: 'custom', message: 'id를 입력해주세요.' });

      return;
    }

    if (!data.pw) {
      setFocus('pw');
      setError('pw', { type: 'custom', message: 'pw를 입력해주세요.' });
      return;
    }

    if (data.id !== 'admin') {
      setFocus('id');
      setError('id', { type: 'custom', message: 'id가 잘못되었습니다.' });
      return;
    }

    if (data.pw !== '1234') {
      setFocus('pw');
      setError('pw', { type: 'custom', message: 'pw가 잘못되었습니다.' });
      return;
    }

    router.push('/dashboard/admin');
  };

  const onLogin = () => {
    return watch('id') && watch('pw');
  };

  return (
    <article className="flex flex-col items-center justify-center text-black w-[961px] h-[685px] rounded-[48px] bg-white shadow-lg">
      <AIM width="145px" height="97px" />
      <form className="flex flex-col gap-[8px] " onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id">ID</label>
        <input
          id="id"
          type="text"
          placeholder="id를 입력해주세요"
          {...register('id', { required: true })}
          className={cls(
            errors?.id ? 'border-[1px] border-red-500 bg-fail-2' : '',
            'w-[521px] h-[51px] bg-gray-2 rounded-[24px] px-[20px]'
          )}
        />
        <label htmlFor="pw">Password</label>
        <input
          id="pw"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register('pw')}
          className={cls(
            errors?.pw ? 'border-[1px] border-red-500 bg-fail-2' : '',
            'w-[521px] h-[51px] bg-gray-2 rounded-[24px] px-[20px]'
          )}
        />

        <button type="submit" className="flex justify-center mt-[48px]" disabled={!onLogin()}>
          {onLogin() ? <LoginIcon /> : <LoginOffIcon />}
        </button>

        {errors?.id?.message || errors?.pw?.message}
      </form>
    </article>
  );
};

export default Login;
