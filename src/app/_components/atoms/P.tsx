import { AtomProps } from '@/app/_types/commendTypes';
import { cls } from '@utils/util';

export enum Size {
  small = 14,
  regular = 16,
  large = 20,
  extraLarge = 30
}

export enum Weight {
  regular = 400,
  bold = 700,
  extraBold = 800
}

interface PProps extends AtomProps {
  font?: string;
}
const P = ({ className = '', children, font }: PProps) => {
  return <p className={cls(font ? font : '', className)}>{children}</p>;
};
export default P;
