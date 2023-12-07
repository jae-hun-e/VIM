import BtnDelete from '@assets/btn/btn_delete.svg';
import { BtnProps } from '@customTypes/commendTypes';

const DeleteBtn = ({ className, onClick }: BtnProps) => {
  return (
    <button className={className} type="submit" onClick={onClick}>
      <BtnDelete />
    </button>
  );
};

export default DeleteBtn;
