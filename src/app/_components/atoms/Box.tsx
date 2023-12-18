import { cls } from '@utils/utils';
import { AtomProps } from '@/app/_types/commendTypes';

interface BoxProps extends AtomProps {
  onClick?: () => void;
}
const Box = ({ className = '', children, onClick }: BoxProps) => {
  return (
    <article
      className={cls(className, 'rounded-xl p-[32px] bg-white overflow-auto custom-scroll')}
      onClick={onClick}>
      {children}
    </article>
  );
};

export default Box;
