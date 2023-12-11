'use client';
import Box from '@components/atoms/Box';
import SaveBtn from '@components/molecules/SaveBtn';
import Link from 'next/link';
import { infoIP, routerHref } from '@constants/constantsList';
import { useForm } from 'react-hook-form';
import { cls } from '@utils/util';
import { InsertUploadProps } from '@/app/_types/reqestType';
import { validatedIpAddress } from '@utils/validation';

const InsertUpload = () => {
  const { register, handleSubmit, watch, setError } = useForm<InsertUploadProps>();

  const handleInsertUpload = (data: InsertUploadProps) => {
    if (!validatedIpAddress(data.ipAddress)) {
      setError(
        'ipAddress',
        { type: 'custom', message: 'ip주소값이 잘못 되었습니다.' },
        { shouldFocus: true }
      );
    }
    if (!validatedIpAddress(data.maxAddress)) {
      setError(
        'ipAddress',
        { type: 'custom', message: 'ip주소값이 잘못 되었습니다.' },
        { shouldFocus: true }
      );
    }
    console.log('data', data);
  };

  const onSaveBtn = (): boolean => {
    for (const { type } of infoIP) {
      if (!watch(type)) return false;
    }
    return true;
  };

  return (
    <Box className="w-[485px]">
      <div className="flex justify-between items-center">
        <p className="text-[24px]">정보 기입</p>
        <Link href={routerHref.remainIP} className="text-gray-4">
          잔여 IP 보러가기 &gt;
        </Link>
      </div>
      <p className="text-[20px] text-gray-4 mt-[16px] mb-[40px]">정보를 입력해주세요</p>
      <form className="flex flex-col gap-[16px]" onSubmit={handleSubmit(handleInsertUpload)}>
        {infoIP.map(({ id, title, type }) => {
          return (
            <div key={id} className="flex ">
              <label htmlFor={title} className="text-[18px] w-[126px]">
                {title}
              </label>
              <input
                id={title}
                type="text"
                className={cls(
                  type === 'floor' ? 'w-[77px] ' : 'w-[295px] ',
                  'bg-gray-2 px-[16px] text-[14px] rounded-[4px]'
                )}
                {...register(type, { required: true })}
              />
            </div>
          );
        })}
        <div className="flex justify-end mt-[16px]">
          <SaveBtn disabled={onSaveBtn()} />
        </div>
      </form>
    </Box>
  );
};

export default InsertUpload;
