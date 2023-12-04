'use client';
import { useForm } from 'react-hook-form';
import BtnInput from '@assets/btn/btn_input.svg';
import { cls } from '@utils/util';
import SaveBtn from '@components/molecules/SaveBtn';
import FloorIPSetting from '@components/organisms/FloorIPSetting';

export interface DefaultSettingState {
  [key: string]: string;
}
const AdminPage = () => {
  const { register, handleSubmit, watch } = useForm<DefaultSettingState>();

  const defaultSettingState = [
    { title: 'Gateway', type: 'gateway' },
    { title: 'DNS', type: 'dns' },
    { title: '시작 IP', type: 'startIP' },
    { title: '종료 IP', type: 'endIP' },
    { title: '층 수', type: 'floor' }
  ];

  const isDisabled = (): boolean =>
    !!(watch('gateway') && watch('dns') && watch('startIP') && watch('endIP') && watch('floor'));

  const onSubmit = (data: DefaultSettingState) => {
    isDisabled();
    console.log(data);
  };
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <article className="rounded-2xl bg-white shadow-2xl p-[32px]">
        <h3 className="text-main font-bold text-[24px] mb-[24px]"> 비비아이피병원</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="relative">
          <article className="flex flex-col gap-4 mb-[32px]">
            {defaultSettingState.map(({ title, type }) => {
              return (
                <div key={title} className="flex gap-[20px]">
                  <label className="font-medium w-[75px]" htmlFor={type}>
                    {title}
                  </label>
                  <input
                    type="number"
                    id={type}
                    className={cls(
                      type === 'floor' ? 'w-[77px]' : 'w-[295px]',
                      'h-[36px] bg-gray-2 rounded-[4px] px-[16px] appearance-none'
                    )}
                    {...register(type, { required: true })}
                  />
                  {(type === 'floor' || type === 'endIP') && (
                    <button className="w-[66px] h-[36px]">
                      <BtnInput />
                    </button>
                  )}
                </div>
              );
            })}
          </article>

          <div className="w-full">
            {watch('floor') && FloorIPSetting({ floorNum: Number(watch('floor')), register })}
          </div>

          <div className="flex justify-end">
            <SaveBtn disabled={isDisabled()} />
          </div>
        </form>
      </article>
    </section>
  );
};
export default AdminPage;
