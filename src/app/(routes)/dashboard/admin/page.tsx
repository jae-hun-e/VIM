'use client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import EditBtn from '@components/molecules/button/EditBtn';
import LeftArrowBtn from '@components/molecules/button/LeftArrowBtn';
import RightArrowBtn from '@components/molecules/button/RightArrowBtn';
import SaveBtn from '@components/molecules/button/SaveBtn';
import FloorIPSetting from '@components/organisms/FloorIPSetting';
import { defaultSettingState } from '@constants/constantsList';
import {
  DefaultSettingState,
  DefaultSettingStateProps
} from '@customTypes/commendTypes';
import { AdminConfig, AdminFloor } from '@customTypes/reqestType';
import { getAdminInfo } from '@services/get/getResponse';
import { patchAdminConfig } from '@services/patch/patchInfo';
import { postAdminFloor } from '@services/post/postFormData';
import { isDefaultSetup } from '@stores/atoms';
import { onSaveBtn } from '@utils/activation';
import { cls, pageNation } from '@utils/utils';
import { validatedIpAddress, validatedScopeIPAddress } from '@utils/validation';

const AdminPage = () => {
  const [curPage, setCurPage] = useState<number>(0);
  const [isSetup, setIsSetup] = useRecoilState(isDefaultSetup);
  const { data: adminConfigRes } = useQuery({
    queryKey: [getAdminInfo],
    queryFn: getAdminInfo,
    enabled: !!getAdminInfo
  });
  const { mutateAsync: configMutate } = useMutation({
    mutationKey: [patchAdminConfig],
    mutationFn: patchAdminConfig
  });
  const { mutate: floorMutate } = useMutation({
    mutationKey: [postAdminFloor],
    mutationFn: postAdminFloor
  });

  const {
    register,
    handleSubmit,
    setError,
    watch,
    setValue,
    formState: { errors }
  } = useForm<DefaultSettingState>();

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

  const toggleSetup = () => setIsSetup(!isSetup);

  const handleSubmitAdminConfig = async (data: DefaultSettingState) => {
    if (!validatedIpAddress(data.admin_gateway)) {
      setError(
        'admin_gateway',
        { type: 'custom', message: 'ip주소값이 잘못 되었습니다.' },
        { shouldFocus: true }
      );
      return;
    }

    if (
      !validatedScopeIPAddress(
        data.admin_startIpAddress,
        data.admin_endIpAddress
      )
    ) {
      setError(
        'admin_startIpAddress',
        { type: 'custom', message: 'ip주소값이 잘못 되었습니다.' },
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
        !validatedScopeIPAddress(
          data[`admin_floor_start_ip_address_${i}F`],
          data[`admin_floor_end_ip_address_${i}F`]
        )
      ) {
        setError(
          `admin_floor_start_ip_address_${i}F`,
          { type: 'custom', message: `${i}F ipAddress값이 잘못 되었습니다.` },
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
    toggleSetup();
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
          <LeftArrowBtn
            className="pb-[72px]"
            onClick={() => setCurPage(curPage - 1)}
          />
        )}
        {watch('admin_floor') &&
          FloorIPSetting({ page: floorPages[curPage], register, isSetup })}
        {totalFloor > 4 &&
          curPage < Math.ceil(Number(watch('admin_floor')) / 4) - 1 && (
            <RightArrowBtn
              className="pb-[72px]"
              onClick={() => setCurPage(curPage + 1)}
            />
          )}
      </article>

      <div className="flex justify-end">
        {isSetup ? (
          <EditBtn onClick={toggleSetup} />
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
      {errors && Object.keys(errors).map((key) => errors[key]?.message)}
    </form>
  );
};
export default AdminPage;
