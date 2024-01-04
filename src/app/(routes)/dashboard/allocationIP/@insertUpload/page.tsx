'use client';
import { useMutation } from '@tanstack/react-query';

import { useForm } from 'react-hook-form';

import SaveBtn from '@components/molecules/button/SaveBtn';
import { infoIP } from '@constants/constantsList';
import { InfoIPProps } from '@customTypes/commendTypes';
import { InsertUploadProps } from '@customTypes/reqestType';
import { postInsertIP } from '@services/post/postFormData';
import { onSaveBtn } from '@utils/activation';
import { cls } from '@utils/utils';
import { validatedIpAddress, validatedMACAddress } from '@utils/validation';

const InsertUpload = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    reset
  } = useForm<InsertUploadProps>();

  const { mutate } = useMutation({
    mutationKey: [postInsertIP],
    mutationFn: postInsertIP
  });
  const handleInsertUpload = (data: InsertUploadProps) => {
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

    console.log(data.isComputer);
    data.isComputer = String(data.isComputer).includes('컴퓨터');

    mutate(data);
    reset();
  };

  return (
    <form className="flex flex-col gap-[16px]">
      {infoIP.map(({ id, title, type }) => {
        return (
          <div key={id} className="flex ">
            <label htmlFor={title} className="text-[18px] w-[126px]">
              {title}
            </label>
            <input
              id={title}
              type={type === 'floor' ? 'number' : 'text'}
              className={cls(
                type === 'floor' ? 'w-[77px] ' : 'w-[295px] ',
                errors?.[type]
                  ? 'border-[1px] border-red-500 bg-fail-2'
                  : 'bg-gray-2',
                'px-[16px] text-[14px] rounded-[4px]'
              )}
              {...register(type, { required: true })}
            />
          </div>
        );
      })}
      <div className="flex justify-end mt-[16px]">
        <SaveBtn
          disabled={onSaveBtn<InsertUploadProps, InfoIPProps>({
            watch,
            inputList: infoIP
          })}
          onClick={handleSubmit(handleInsertUpload)}
        />
      </div>
    </form>
  );
};

export default InsertUpload;
