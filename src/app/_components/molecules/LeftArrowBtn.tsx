import BtnLeftArrow from '@assets/icon/icon_arrow_L.svg';
import { BtnProps } from '@/app/_types/commendTypes';

const LeftArrowBtn = ({ className, onClick }: BtnProps) => {
  return (
    <button className={className} onClick={onClick}>
      <BtnLeftArrow />
    </button>
  );
};

export default LeftArrowBtn;
