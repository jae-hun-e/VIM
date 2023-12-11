import BtnSave from '@assets/btn/btn_save.svg';
import BtnSaveOff from '@assets/btn/btn_save_off.svg';
import { BtnProps } from '@customTypes/commendTypes';
interface SaveBtnProps extends BtnProps {
  disabled: boolean;
}
const SaveBtn = ({ className, onClick, disabled }: SaveBtnProps) => {
  return (
    <button className={className} type="button" onClick={onClick}>
      {disabled ? <BtnSave /> : <BtnSaveOff />}
    </button>
  );
};

export default SaveBtn;
