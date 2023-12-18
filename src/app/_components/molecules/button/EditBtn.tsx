import BtnEdit from '@assets/btn/btn_edit.svg';
import { BtnProps } from '@/app/_types/commendTypes';

const EditBtn = ({ className, onClick }: BtnProps) => {
  return (
    <button className={className} type="button" onClick={onClick}>
      <BtnEdit />
    </button>
  );
};

export default EditBtn;
