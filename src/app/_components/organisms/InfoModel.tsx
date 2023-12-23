import { useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import DeleteBtn from '@components/molecules/button/DeleteBtn';
import EditBtn from '@components/molecules/button/EditBtn';
import SaveBtn from '@components/molecules/button/SaveBtn';
import Model from '@components/molecules/common/Model';
import { InfoArrProps } from '@customTypes/commendTypes';
import { InsertUploadProps } from '@customTypes/reqestType';
import { ResponsePeople } from '@customTypes/ResponseType';
import { deletePeopleInfo } from '@services/delete/deleteInfo';
import { patchPeopleInfo } from '@services/patch/patchInfo';
import { searchList } from '@stores/atoms';
import { cls } from '@utils/utils';
import { validatedIpAddress, validatedMACAddress } from '@utils/validation';

interface InfoModelProps {
  info: ResponsePeople | null;
  visible: boolean;
  onClose: () => void;
}
const InfoModel = ({ info, visible, onClose }: InfoModelProps) => {
  const [isSetup, setIsSetup] = useState(true);
  const [list, setList] = useRecoilState(searchList);
  const { register, handleSubmit, watch, setError } =
    useForm<InsertUploadProps>();

  const { mutate: patchMutate } = useMutation({
    mutationKey: [patchPeopleInfo],
    mutationFn: patchPeopleInfo,
    onMutate: (data) => {
      if (!list) return;
      const newList = [...list];
      const idx = newList.findIndex(
        ({ ipAddress }) => ipAddress === data.ipAddress
      );
      newList[idx] = { ...newList[idx], ...data };
      setList(newList);
    }
  });
  const { mutate: deleteMutate } = useMutation({
    mutationKey: [deletePeopleInfo],
    mutationFn: deletePeopleInfo,
    onMutate: (target) => {
      if (!list) return;
      const newList = list.filter(({ ipAddress }) => ipAddress !== target);
      setList(newList);
    }
  });

  if (!info) return;
  const { ipAddress, floor, name, macAddress, department } = info;

  const infoArr: InfoArrProps[] = [
    { title: 'IP Address', type: 'ipAddress', value: ipAddress },
    { title: 'MAC Address', type: 'macAddress', value: macAddress },
    { title: '사원 이름', type: 'name', value: name },
    { title: '층', type: 'floor', value: floor },
    { title: '부서', type: 'department', value: department }
  ];

  const onSaveBtn = (): boolean => {
    for (const { type } of infoArr) {
      if (!watch(type)) return false;
    }
    return true;
  };

  const handlePatch = () => {
    setIsSetup(!isSetup);
  };
  const handleSave = (data: InsertUploadProps) => {
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

    patchMutate(data);
    onClose();
  };

  const handleDelete = () => {
    deleteMutate(infoArr[0]?.value as string);
    onClose();
  };

  //
  return (
    <Model isOpen={visible} onClose={onClose} className="w-[485px] h-[400px]">
      <div className="flex-grow flex flex-col justify-start items-start gap-[24px] text-[20px]">
        <form className="flex flex-col gap-[16px]">
          {infoArr.map(({ title, type, value }) => {
            return (
              <div key={title} className="flex gap-[20px]">
                <label htmlFor={title} className="text-[18px] w-[126px]">
                  {title}
                </label>
                <input
                  id={title}
                  type={type === 'floor' ? 'number' : 'text'}
                  className={cls(
                    type === 'floor' ? 'w-[77px]' : 'w-[295px]',
                    isSetup ? 'bg-white' : 'bg-gray-2',
                    'h-[36px] bg-gray-2 rounded-[4px] px-[16px]'
                  )}
                  defaultValue={value}
                  disabled={isSetup}
                  {...register(type, { required: true })}
                />
              </div>
            );
          })}
        </form>
      </div>

      <div className="flex  justify-center gap-[24px]">
        <EditBtn
          onClick={handlePatch}
          className={cls(isSetup ? 'block' : 'hidden')}
        />

        <SaveBtn
          disabled={onSaveBtn()}
          onClick={handleSubmit(handleSave)}
          className={cls(isSetup ? 'hidden' : 'block')}
        />

        <DeleteBtn onClick={handleDelete} />
      </div>
    </Model>
  );
};

export default InfoModel;
