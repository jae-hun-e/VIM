'use client';
import Box from '@components/atoms/Box';
import SaveBtn from '@components/molecules/SaveBtn';
import Link from 'next/link';
import { infoIP, routerHref } from '@constants/navList';
import { useForm } from 'react-hook-form';
import { cls } from '@utils/util';

const InsertUpload = () => {
  const { register, handleSubmit, watch, setError } = useForm();
  return (
    <Box className="w-[485px]">
      <div className="flex justify-between items-center">
        <p className="text-[24px]">정보 기입</p>
        <Link href={routerHref.remainIP} className="text-gray-4">
          잔여 IP 보러가기 &gt;
        </Link>
      </div>
      <p className="text-[20px] text-gray-4 mt-[16px] mb-[40px]">정보를 입력해주세요</p>
      <form className="flex flex-col gap-[16px]">
        {infoIP.map(({ id, title, value }) => {
          return (
            <div key={id} className="flex ">
              <label htmlFor={title} className="text-[18px] w-[126px]">
                {title}
              </label>
              <input
                id={title}
                type="text"
                className={cls(
                  value === 'floor' ? 'w-[77px] ' : 'w-[295px] ',
                  'bg-gray-2 px-[16px] text-[14px] rounded-[4px]'
                )}
                {...register(title, { required: true })}
              />
            </div>
          );
        })}
        <div className="flex justify-end mt-[16px]">
          <SaveBtn disabled={false} />
        </div>
      </form>
    </Box>
  );
};

export default InsertUpload;
