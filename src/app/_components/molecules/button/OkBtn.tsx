import BtnOk from '@assets/btn/btn_popup_ok.svg';
import { BtnProps } from '@/app/_types/commendTypes';

const OkBtn = ({ className, onClick }: BtnProps) => {
  return (
    <button className={className} type="submit" onClick={onClick}>
      <BtnOk />
    </button>
  );
};

export default OkBtn;
