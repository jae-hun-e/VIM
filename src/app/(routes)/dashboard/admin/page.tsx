'use client';
import { useForm } from 'react-hook-form';
import { cls, pageNation } from '@utils/util';
import SaveBtn from '@components/molecules/SaveBtn';
import FloorIPSetting from '@components/organisms/FloorIPSetting';
import { useState } from 'react';
import RightArrowBtn from '@components/molecules/RightArrowBtn';
import LeftArrowBtn from '@components/molecules/LeftArrowBtn';
import { defaultSettingState } from '@constants/constantsList';
import { useRecoilState } from 'recoil';
import { isDefaultSetup } from '@stores/atoms';
import EditBtn from '@components/molecules/EditBtn';
import { getAdminInfo } from '@services/get/getResponse';
import { useMutation, useQuery } from '@tanstack/react-query';
import { postAdminConfig } from '@services/post/postFormData';

export interface DefaultSettingState {
  [key: string]: string;
}
const AdminPage = () => {
  const [curPage, setCurPage] = useState<number>(0);
  const [isSetup, setIsSetup] = useRecoilState(isDefaultSetup);
  const { data, isError, error } = useQuery({ queryKey: [getAdminInfo], queryFn: getAdminInfo });
  const { mutate } = useMutation({
    mutationKey: [postAdminConfig],
    mutationFn: postAdminConfig
  });

  const { register, handleSubmit, watch } = useForm<DefaultSettingState>();

  const floorPages: number[][] = pageNation(watch('admin.floor'));

  const validatedState = (): boolean =>
    !!(watch('gateway') && watch('dns') && watch('startIP') && watch('endIP') && watch('floor'));

  const onSubmit = (data: DefaultSettingState) => {
    // todo input값 validation
    setIsSetup(true);

    console.log('data', data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      <article className="flex flex-col gap-4 mb-[32px]">
        {defaultSettingState.map(({ title, key }) => {
          return (
            <div key={title} className="flex gap-[20px]">
              <label className="font-medium w-[75px]" htmlFor={key}>
                {title}
              </label>
              <input
                type="number"
                id={key}
                className={cls(
                  key === 'admin.floor' ? 'w-[77px]' : 'w-[295px]',
                  isSetup ? 'bg-white' : 'bg-gray-2',
                  'h-[36px] bg-gray-2 rounded-[4px] px-[16px] appearance-none'
                )}
                disabled={isSetup}
                {...register(key, { required: true })}
              />
            </div>
          );
        })}
      </article>

      <article className="w-full flex justify-center">
        {Number(watch('admin.floor')) > 4 && curPage > 0 && (
          <LeftArrowBtn className="pb-[72px]" onClick={() => setCurPage(curPage - 1)} />
        )}
        {watch('admin.floor') && FloorIPSetting({ page: floorPages[curPage], register, isSetup })}
        {Number(watch('admin.floor')) > 4 &&
          curPage < Math.ceil(Number(watch('admin.floor')) / 4) - 1 && (
            <RightArrowBtn className="pb-[72px]" onClick={() => setCurPage(curPage + 1)} />
          )}
      </article>

      <div className="flex justify-end">
        {isSetup ? (
          <EditBtn onClick={() => setIsSetup(!isSetup)} />
        ) : (
          <SaveBtn disabled={validatedState()} />
        )}
      </div>
    </form>
  );
};
export default AdminPage;
