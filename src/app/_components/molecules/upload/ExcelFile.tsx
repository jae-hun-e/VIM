'use client';
import UploadBtn from '@components/molecules/button/UploadBtn';
import { ChangeEvent, useEffect } from 'react';
import useReadExcel from '@hooks/useReadExcel';
import { useMutation } from '@tanstack/react-query';
import { postFileUploadIP } from '@services/post/postFormData';
import SaveBtn from '@components/molecules/button/SaveBtn';
import SkeletonLoader from '@components/molecules/common/SkeletonLoader';

const ExcelFile = () => {
  const { data, readExcel } = useReadExcel();
  const { mutate } = useMutation({ mutationKey: [postFileUploadIP], mutationFn: postFileUploadIP });

  const excelExport = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    readExcel(files[0]);
  };

  useEffect(() => {
    console.log(data);
    if (!data) return;
    // mutate(data);
  }, [data]);

  return (
    <>
      <div className="my-[16px]">
        <label htmlFor="file">
          <UploadBtn />
        </label>
        <input id="file" type="file" hidden={true} onChange={excelExport} />
      </div>
      <p className="text-[20px] text-gray-4 mb-[20px]">액셀 파일 형식을 지켜주세요</p>
      <div className="w-full h-[648px] bg-gray-3 rounded-xl" />
      <div className="flex justify-end items-center my-[32px]">
        <p className="flex-grow text-center">완료 메시지</p>
        <SaveBtn disabled={false} />
      </div>
    </>
  );
};

export default ExcelFile;
