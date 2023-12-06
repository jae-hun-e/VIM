import { ReactNode } from 'react';
import { cls } from '@utils/util';

interface BoxProps {
  className?: string;
  children?: ReactNode;
}
const Box = ({ className = '', children }: BoxProps) => {
  return <article className={cls(className, 'rounded-xl p-[32px] bg-white')}>{children}</article>;
};

export default Box;
