import { ReactNode } from 'react';

import Link from 'next/link';

import Box from '@components/atoms/Box';
import { routerHref } from '@constants/constantsList';

const AllocationIPLayout = ({
  fileUpload,
  insertUpload
}: {
  fileUpload: ReactNode;
  insertUpload: ReactNode;
}) => {
  return (
    <section className="flex gap-[20px] w-full">
      <Box className="w-3/4 max-w-[788px] min-h-[80vh]">
        <div className="flex justify-between items-center">
          <p className="text-[24px]">파일 업로드</p>
          <Link href={routerHref.remainIP} className="text-gray-4">
            잔여 IP 보러가기 &gt;
          </Link>
        </div>
        {fileUpload}
      </Box>
      <Box className="max-w-[485px]">
        <div className="flex justify-between items-center">
          <p className="text-[24px]">정보 기입</p>
          <Link href={routerHref.remainIP} className="text-gray-4">
            잔여 IP 보러가기 &gt;
          </Link>
        </div>
        <p className="text-[20px] text-gray-4 mt-[16px] mb-[40px]">
          정보를 입력해주세요
        </p>
        {insertUpload}
      </Box>
    </section>
  );
};

export default AllocationIPLayout;
