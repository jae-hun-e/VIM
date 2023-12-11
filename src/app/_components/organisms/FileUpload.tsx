import Box from '@components/atoms/Box';
import UploadBtn from '@components/molecules/UploadBtn';
import SaveBtn from '@components/molecules/SaveBtn';
import Link from 'next/link';
import { routerHref } from '@constants/constantsList';

const FileUpload = () => {
  return (
    <Box className="w-[788px] ">
      <div className="flex justify-between items-center">
        <p className="text-[24px]">파일 업로드</p>
        <Link href={routerHref.remainIP} className="text-gray-4">
          잔여 IP 보러가기 &gt;
        </Link>
      </div>
      <div className="my-[16px]">
        <label htmlFor="file">
          <UploadBtn />
        </label>
        <input id="file" type="file" hidden={true} />
      </div>

      <p className="text-[20px] text-gray-4 mb-[20px]">액셀 파일 형식을 지켜주세요</p>
      <div className="w-full h-[648px] bg-gray-3 rounded-xl"></div>
      <div className="flex justify-end items-center my-[32px]">
        <p className="flex-grow text-center">완료 메시지</p>
        <SaveBtn disabled={false} />
      </div>
    </Box>
  );
};

export default FileUpload;
