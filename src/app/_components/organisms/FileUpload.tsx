import Box from '@components/atoms/Box';
import Link from 'next/link';
import { routerHref } from '@constants/constantsList';
import ExcelFile from '@components/molecules/upload/ExcelFile';

const FileUpload = () => {
  return (
    <Box className="w-3/4 max-w-[788px]">
      <div className="flex justify-between items-center">
        <p className="text-[24px]">파일 업로드</p>
        <Link href={routerHref.remainIP} className="text-gray-4">
          잔여 IP 보러가기 &gt;
        </Link>
      </div>
      <ExcelFile />
    </Box>
  );
};

export default FileUpload;
