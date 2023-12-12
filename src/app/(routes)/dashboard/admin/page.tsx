'use client';
import { useForm } from 'react-hook-form';
import { cls, pageNation } from '@utils/util';
import SaveBtn from '@components/molecules/SaveBtn';
import FloorIPSetting from '@components/organisms/FloorIPSetting';
import { useEffect, useState } from 'react';
import RightArrowBtn from '@components/molecules/RightArrowBtn';
import LeftArrowBtn from '@components/molecules/LeftArrowBtn';
import { defaultSettingState } from '@constants/constantsList';
import { useRecoilState } from 'recoil';
import { isDefaultSetup } from '@stores/atoms';
import EditBtn from '@components/molecules/EditBtn';
import { getAdminInfo } from '@services/get/getResponse';
import { useMutation, useQuery } from '@tanstack/react-query';
import { postAdminFloor } from '@services/post/postFormData';
import { patchAdminConfig } from '@services/patch/patchInfo';
import { AdminConfig, AdminFloor } from '@/app/_types/reqestType';

export interface DefaultSettingState {
  [key: string]: string;
}
const AdminPage = () => {
  const [curPage, setCurPage] = useState<number>(0);
  const [isSetup, setIsSetup] = useRecoilState(isDefaultSetup);
  const { data, isError, error } = useQuery({ queryKey: [getAdminInfo], queryFn: getAdminInfo });
  const { mutateAsync: configMutate } = useMutation({
    mutationKey: [patchAdminConfig],
    mutationFn: patchAdminConfig
  });
  const { mutate: floorMutate } = useMutation({
    mutationKey: [postAdminFloor],
    mutationFn: postAdminFloor
  });

  const { register, handleSubmit, watch, setValue } = useForm<DefaultSettingState>();

  const totalFloor = Number(watch('admin_floor'));
  const floorPages: number[][] = pageNation(totalFloor);

  useEffect(() => {
    if (data?.data) {
      for (const { key, value } of data.data) {
        console.log(key, value);
        //   setValue(key, data[key]);
      }
      setIsSetup(true);
    }
  }, [data]);

  const onSaveBtn = (): boolean => {
    for (const { type } of defaultSettingState) {
      if (!watch(type)) return false;
    }
    for (let i = 1; i <= totalFloor; i++) {
      if (
        !(watch(`admin_floor_end_ip_address_${i}F`) && watch(`admin_floor_start_ip_address_${i}F`))
      )
        return false;
    }
    return true;
  };

  const handleSubmitAdminConfig = async (data: DefaultSettingState) => {
    const configReq = { keys: [] } as AdminConfig;

    for (const { type } of defaultSettingState) {
      configReq.keys.push({ key: type, value: data[type] });
    }
    console.log('configReq', configReq);
    const configRes = await configMutate(configReq);
    console.log('configRes', configRes);

    const floorReq = { floors: [] } as AdminFloor;
    for (let i = 1; i <= totalFloor; i++) {
      floorReq.floors.push({
        floor: i,
        startIpAddress: data[`admin_floor_start_ip_address_${i}F`],
        endIpAddress: data[`admin_floor_end_ip_address_${i}F`]
      });
    }
    console.log('floorReq', floorReq);
    const floorRes = floorMutate(floorReq);
    console.log('floorRes', floorRes);

    setIsSetup(true);
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
        {totalFloor > 4 && curPage > 0 && (
          <LeftArrowBtn className="pb-[72px]" onClick={() => setCurPage(curPage - 1)} />
        )}
        {watch('admin_floor') && FloorIPSetting({ page: floorPages[curPage], register, isSetup })}
        {totalFloor > 4 && curPage < Math.ceil(Number(watch('admin_floor')) / 4) - 1 && (
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
