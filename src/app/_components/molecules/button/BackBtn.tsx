import Link from 'next/link';

import BtnBack from '@assets/icon/icon_arrow_back.svg';
import { BtnProps } from '@customTypes/commendTypes';

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
