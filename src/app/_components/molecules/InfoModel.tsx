import Model from '@components/atoms/Model';
import { ResponsePeople } from '@/app/_types/ResponseType';
import EditBtn from '@components/molecules/EditBtn';
import DeleteBtn from '@components/molecules/DeleteBtn';
import { useState } from 'react';
import SaveBtn from '@components/molecules/SaveBtn';
import { cls } from '@utils/util';
import { useForm } from 'react-hook-form';
import { InsertUploadProps } from '@/app/_types/reqestType';
import { InfoArrProps } from '@/app/_types/commendTypes';
import { useMutation } from '@tanstack/react-query';
import { patchPeopleInfo } from '@services/patch/patchInfo';
import { defaultSettingState } from '@constants/constantsList';
import { deletePeopleInfo } from '@services/delete/deleteInfo';

interface InfoModelProps {
  openModel: () => void;
  info: ResponsePeople;
}

const InfoModel = ({ openModel, info }: InfoModelProps) => {
  const [isSetup, setIsSetup] = useState(true);
  const { register, handleSubmit, watch } = useForm<InsertUploadProps>();

  const { mutate: patchMutate } = useMutation({
    mutationKey: [patchPeopleInfo],
    mutationFn: patchPeopleInfo
  });
  const { mutate: deleteMutate } = useMutation({
    mutationKey: [deletePeopleInfo],
    mutationFn: deletePeopleInfo
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

  const handlePatch = (data: InsertUploadProps) => {
    patchMutate(data);
    openModel();
  };

  const handleDelete = () => {
    deleteMutate(infoArr[0]?.value as string);
    openModel();
  };

  return (
    <Model className="w-[485px] h-[400px]">
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
        {isSetup ? (
          <EditBtn onClick={() => setIsSetup(!isSetup)} />
        ) : (
          <SaveBtn disabled={onSaveBtn()} onClick={handleSubmit(handlePatch)} />
        )}
        <DeleteBtn onClick={handleDelete} />
      </div>
    </Model>
  );
};

export default InfoModel;
