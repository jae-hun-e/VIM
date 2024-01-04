'use client';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';

import { ChangeEvent, useEffect, useState } from 'react';

import { InsertUploadProps } from '@/app/_types/reqestType';
import SaveBtn from '@components/molecules/button/SaveBtn';
import UploadBtn from '@components/molecules/button/UploadBtn';
import useReadExcel from '@hooks/useReadExcel';
import { postFileUploadIP } from '@services/post/postFormData';

const ExcelFile = () => {
  const [bulkData, setBulkData] = useState<InsertUploadProps[]>([]);
  const { data, readExcel } = useReadExcel();
  const { mutate } = useMutation({
    mutationKey: [postFileUploadIP],
    mutationFn: postFileUploadIP
  });

  const excelExport = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    readExcel(files[0]);
  };

  const handleSave = () => {
    mutate(bulkData);
  };

  useEffect(() => {
    if (!data) return;

    const bulkData = data.map((item) => ({
      ipAddress: item['IP Address']?.trim(),
      macAddress: item['MAC Address']?.trim(),
      name: item['담당 사원 이름']?.trim(),
      floor: item['층수'],
      department: item['부서']?.trim(),
      isComputer: item['용도'] ? item['용도'].includes('컴퓨터') : true
    }));

    setBulkData(bulkData);
  }, [data]);

  return (
    <>
      <div className="my-[16px]">
        <label htmlFor="file">
          <UploadBtn />
        </label>
        <input id="file" type="file" hidden={true} onChange={excelExport} />
      </div>
      <p className="text-[20px] text-gray-4 mb-[20px]">
        액셀 파일 형식을 지켜주세요
      </p>
      <Image
        src={'/excel.png'}
        alt={'excel'}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />

      <div className="flex justify-end items-center my-[32px]">
        <p className="flex-grow text-center">
          {!!bulkData?.length
            ? `IP ${bulkData.length}건 업로드 완료`
            : '파일을 업로드 해주세요'}
        </p>
        <SaveBtn disabled={!!bulkData?.length} onClick={handleSave} />
      </div>
    </>
  );
};

export default ExcelFile;
