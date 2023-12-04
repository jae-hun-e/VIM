import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface IForm {
  id: string;
  pw: string;
}
const Login = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const router = useRouter();
  const onSubmit = (data: IForm) => {
    console.log(data);
    router.push('/dashboard/admin');
  };
  return (
    <article className="flex items-center justify-center text-black w-full">
      <form className="flex flex-col w-1/3 border-4 gap-2" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id">
          <input
            id="id"
            type="text"
            placeholder="id를 입력해주세요"
            {...register('id', { required: true })}
          />
        </label>
        <label htmlFor="pw">
          <input
            id="pw"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register('pw', { required: true })}
          />
        </label>
        <button type="submit">로그인</button>
      </form>
    </article>
  );
};

export default Login;
