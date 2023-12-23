import BtnUpload from '@assets/btn/btn_upload.svg';
import { BtnProps } from '@customTypes/commendTypes';
import { cls } from '@utils/utils';

const UploadBtn = ({ className = '' }: BtnProps) => {
  return (
    <span className={cls(className, 'cursor-pointer inline-block pt-[5px]')}>
      <BtnUpload />
    </span>
  );
};

export default UploadBtn;
