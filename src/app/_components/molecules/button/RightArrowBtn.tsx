import BtnRightArrow from '@assets/icon/icon_arrow_R.svg';
import { BtnProps } from '@customTypes/commendTypes';

const RightArrowBtn = ({ className, onClick }: BtnProps) => {
  return (
    <button className={className} onClick={onClick}>
      <BtnRightArrow />
    </button>
  );
};

export default RightArrowBtn;
