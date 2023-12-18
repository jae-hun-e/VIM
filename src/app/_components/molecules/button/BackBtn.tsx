import BtnBack from '@assets/icon/icon_arrow_back.svg';
import { BtnProps } from '@/app/_types/commendTypes';
import Link from 'next/link';

interface BackBtnProps extends BtnProps {
  onBackHref: string;
}

const BackBtn = ({ className, onClick, onBackHref }: BackBtnProps) => {
  return (
    <Link href={onBackHref}>
      <button className={className} type="submit" onClick={onClick}>
        <BtnBack />
      </button>
    </Link>
  );
};

export default BackBtn;
