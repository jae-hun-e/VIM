'use client';
import { useForm } from 'react-hook-form';

interface IForm {
  id: string;
  pw: string;
}
const Register = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    console.log(data);
  };
  return (
    <article className="flex items-center justify-center text-black">
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
export default Register;
