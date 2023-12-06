'use client';
import { useForm } from 'react-hook-form';
import { cls } from '@utils/util';
import SaveBtn from '@components/molecules/SaveBtn';
import FloorIPSetting from '@components/organisms/FloorIPSetting';
import { useState } from 'react';
import RightArrowBtn from '@components/molecules/RightArrowBtn';
import LeftArrowBtn from '@components/molecules/LeftArrowBtn';
import FailModel from '@components/molecules/FailModel';

export interface DefaultSettingState {
  [key: string]: string;
}
const AdminPage = () => {
  const [curPage, setCurPage] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { register, handleSubmit, watch } = useForm<DefaultSettingState>();

  const defaultSettingState = [
    { title: 'Gateway', type: 'gateway' },
    { title: 'DNS', type: 'dns' },
    { title: '시작 IP', type: 'startIP' },
    { title: '종료 IP', type: 'endIP' },
    { title: '층 수', type: 'floor' }
  ];

  const floorPages: number[][] = [];
  const pageNation = () => {
    const floorNum = Number(watch('floor'));
    if (floorNum <= 4) floorPages.push(Array.from({ length: floorNum }, (_, i) => i + 1));
    else {
      for (let i = 0; i < floorNum / 4 - 1; i++) {
        floorPages.push(Array.from({ length: 4 }, (_, idx) => idx + 1 + i * 4));
      }

      floorPages.push(
        Array.from({ length: floorNum % 4 }, (_, idx) => idx + 1 + Math.floor(floorNum / 4) * 4)
      );
    }
  };
  pageNation();

  const validatedState = (): boolean =>
    !!(watch('gateway') && watch('dns') && watch('startIP') && watch('endIP') && watch('floor'));

  const onSubmit = (data: DefaultSettingState) => {
    setIsDisabled(validatedState());

    console.log('data', data);
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
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
                </div>
              );
            })}
          </article>

          <article className="w-full flex justify-center">
            {Number(watch('floor')) > 4 && curPage > 0 && (
              <LeftArrowBtn className="pb-[72px]" onClick={() => setCurPage(curPage - 1)} />
            )}
            {watch('floor') && FloorIPSetting({ page: floorPages[curPage], register })}
            {Number(watch('floor')) > 4 && curPage < Math.ceil(Number(watch('floor')) / 4) - 1 && (
              <RightArrowBtn className="pb-[72px]" onClick={() => setCurPage(curPage + 1)} />
            )}
          </article>

          <div className="flex justify-end">
            <SaveBtn disabled={isDisabled} />
          </div>
        </form>
      </article>
      {isDisabled ? <FailModel handleClose={() => setIsDisabled(false)} /> : null}
    </div>
  );
};
export default AdminPage;
