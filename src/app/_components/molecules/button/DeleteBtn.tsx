import BtnDelete from '@assets/btn/btn_delete.svg';
import { BtnProps } from '@/app/_types/commendTypes';

const DeleteBtn = ({ className, onClick }: BtnProps) => {
  return (
    <button className={className} type="button" onClick={onClick}>
      <BtnDelete />
    </button>
  );
};

export default DeleteBtn;
