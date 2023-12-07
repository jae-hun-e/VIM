import { cls } from '@utils/util';
import { AtomProps } from '@/app/_types/commendTypes';

const Box = ({ className = '', children }: AtomProps) => {
  return <article className={cls(className, 'rounded-xl p-[32px] bg-white')}>{children}</article>;
};

export default Box;
