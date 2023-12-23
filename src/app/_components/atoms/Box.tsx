import { AtomProps } from '@customTypes/commendTypes';
import { cls } from '@utils/utils';

interface BoxProps extends AtomProps {
  onClick?: () => void;
}
const Box = ({ className = '', children, onClick }: BoxProps) => {
  return (
    <article
      className={cls(
        'rounded-xl p-[32px] bg-white overflow-auto custom-scroll',
        className
      )}
      onClick={onClick}>
      {children}
    </article>
  );
};

export default Box;
