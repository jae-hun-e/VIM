import { ReactNode } from 'react';
import { cls } from '@utils/util';

interface ModelProps {
  className?: string;
  children?: ReactNode;
}
const Model = ({ className = '', children }: ModelProps) => {
  return (
    <div className="bg-gray-3-op z-10 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div
        className={cls(
          className,
          'flex flex-col items-center justify-center rounded-[48px] bg-white shadow-lg'
        )}>
        {children}
      </div>
    </div>
  );
};

export default Model;
