'use client';
import { useForm } from 'react-hook-form';
import { cls, pageNation } from '@utils/utils';
import SaveBtn from '@components/molecules/button/SaveBtn';
import FloorIPSetting from '@components/organisms/FloorIPSetting';
import { useEffect, useState } from 'react';
import RightArrowBtn from '@components/molecules/button/RightArrowBtn';
import LeftArrowBtn from '@components/molecules/button/LeftArrowBtn';
import { defaultSettingState } from '@constants/constantsList';
import { useRecoilState } from 'recoil';
import { isDefaultSetup } from '@stores/atoms';
import EditBtn from '@components/molecules/button/EditBtn';
import { getAdminInfo } from '@services/get/getResponse';
import { useMutation, useQuery } from '@tanstack/react-query';
import { postAdminFloor } from '@services/post/postFormData';
import { patchAdminConfig } from '@services/patch/patchInfo';
import { AdminConfig, AdminFloor } from '@/app/_types/reqestType';
import { onSaveBtn } from '@utils/activation';
import { DefaultSettingState, DefaultSettingStateProps } from '@/app/_types/commendTypes';
import {
  validatedIpAddress,
  validatedMACAddress,
  validatedScopeIPAddress
} from '@utils/validation';

const AdminPage = () => {
  const [curPage, setCurPage] = useState<number>(0);
  const [isSetup, setIsSetup] = useRecoilState(isDefaultSetup);
  const { data: adminConfigRes } = useQuery({ queryKey: [getAdminInfo], queryFn: getAdminInfo });
  const { mutateAsync: configMutate } = useMutation({
    mutationKey: [patchAdminConfig],
    mutationFn: patchAdminConfig
  });
  const { mutate: floorMutate } = useMutation({
    mutationKey: [postAdminFloor],
    mutationFn: postAdminFloor
  });

  const { register, handleSubmit, setError, watch, setValue } = useForm<DefaultSettingState>();

  const totalFloor = Number(watch('admin_floor'));
  const floorPages: number[][] = pageNation(totalFloor);

  useEffect(() => {
    if (adminConfigRes?.data?.length) {
      for (const { key, value } of adminConfigRes.data) {
        setValue(key, value);
      }
      setIsSetup(true);
    }
  }, [adminConfigRes]);

  const handleSubmitAdminConfig = async (data: DefaultSettingState) => {
    if (!validatedIpAddress(data.ipAddress)) {
      setError(
        'ipAddress',
        { type: 'custom', message: 'ip주소값이 잘못 되었습니다.' },
        { shouldFocus: true }
      );
      return;
    }
    if (!validatedMACAddress(data.macAddress)) {
      setError(
        'macAddress',
        { type: 'custom', message: 'mac주소값이 잘못 되었습니다.' },
        { shouldFocus: true }
      );
      return;
    }

    const configReq = { keys: [] } as AdminConfig;

    for (const { type } of defaultSettingState) {
      configReq.keys.push({ key: type, value: data[type] });
    }

    await configMutate(configReq);

    const floorReq = { floors: [] } as AdminFloor;
    for (let i = 1; i <= totalFloor; i++) {
      if (
        validatedScopeIPAddress(
          data[`admin_floor_start_ip_address_${i}F`],
          data[`admin_floor_end_ip_address_${i}F`]
        )
      ) {
        setError(
          `admin_floor_start_ip_address_${i}F`,
          { type: 'custom', message: 'ipAddress값이 잘못 되었습니다.' },
          { shouldFocus: true }
        );
        return;
      }

      floorReq.floors.push({
        floor: i,
        startIpAddress: data[`admin_floor_start_ip_address_${i}F`],
        endIpAddress: data[`admin_floor_end_ip_address_${i}F`]
      });
    }

    floorMutate(floorReq);
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
                type="text"
                id={type}
                className={cls(
                  type === 'admin_floor' ? 'w-[77px]' : 'w-[295px]',
                  isSetup ? 'bg-white' : 'bg-gray-2',
                  'h-[36px] bg-gray-2 rounded-[4px] px-[16px]'
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
          <SaveBtn
            disabled={onSaveBtn<DefaultSettingState, DefaultSettingStateProps>({
              watch,
              inputList: defaultSettingState,
              totalFloor
            })}
            onClick={handleSubmit(handleSubmitAdminConfig)}
          />
        )}
      </div>
    </form>
  );
};
export default AdminPage;
