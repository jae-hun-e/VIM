import BtnSave from '@assets/btn/btn_save.svg';
import BtnSaveOff from '@assets/btn/btn_save_off.svg';
interface SaveBtnProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}
const SaveBtn = ({ className, onClick, disabled }: SaveBtnProps) => {
  return (
    <button className={className} type="submit" onClick={onClick}>
      {disabled ? <BtnSave /> : <BtnSaveOff />}
    </button>
  );
};

export default SaveBtn;
