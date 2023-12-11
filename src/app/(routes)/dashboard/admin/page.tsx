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
import { AdminConfig } from '@/app/_types/reqestType';

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

  const { register, handleSubmit, watch, trigger } = useForm<DefaultSettingState>();

  const totalFloor = watch('admin_floor');
  const floorPages: number[][] = pageNation(Number(totalFloor));

  const onSaveBtn = (): boolean => {
    for (const { type } of defaultSettingState) {
      if (!watch(type)) return false;
    }
    for (let i = 1; i <= Number(totalFloor); i++) {
      if (!(watch(`floor_end_ip_address_${i}F`) && watch(`floor_start_ip_address_${i}F`)))
        return false;
    }
    return true;
  };

  const handleSubmitAdminConfig = (data: DefaultSettingState) => {
    setIsSetup(true);

    const req = { keys: [] } as AdminConfig;
    for (const key in data) {
      req.keys.push({ key, value: data[key] });
    }
    console.log(data);

    // todo BE api 변경 후 test
    // mutate(req);
  };
  return (
    <form className="relative">
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
                  type === 'admin_floor' ? 'w-[77px]' : 'w-[295px]',
                  isSetup ? 'bg-white' : 'bg-gray-2',
                  'h-[36px] bg-gray-2 rounded-[4px] px-[16px] appearance-none'
                )}
                disabled={isSetup}
                {...register(type, { required: true })}
              />
            </div>
          );
        })}
      </article>

      <article className="w-full flex justify-center">
        {Number(watch('admin_floor')) > 4 && curPage > 0 && (
          <LeftArrowBtn className="pb-[72px]" onClick={() => setCurPage(curPage - 1)} />
        )}
        {watch('admin_floor') && FloorIPSetting({ page: floorPages[curPage], register, isSetup })}
        {Number(watch('admin_floor')) > 4 &&
          curPage < Math.ceil(Number(watch('admin_floor')) / 4) - 1 && (
            <RightArrowBtn className="pb-[72px]" onClick={() => setCurPage(curPage + 1)} />
          )}
      </article>

      <div className="flex justify-end">
        {isSetup ? (
          <EditBtn onClick={() => setIsSetup(!isSetup)} />
        ) : (
          <SaveBtn disabled={onSaveBtn()} onClick={handleSubmit(handleSubmitAdminConfig)} />
        )}
      </div>
    </form>
  );
};
export default AdminPage;
