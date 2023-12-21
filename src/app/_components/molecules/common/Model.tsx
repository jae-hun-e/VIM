import { LegacyRef, ReactNode, useEffect, useMemo } from 'react';
import { cls } from '@utils/utils';
import { createPortal } from 'react-dom';
import useClickAway from '@hooks/useClickAway';

interface ModelProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}
const Model = ({ className = '', children, isOpen, onClose }: ModelProps) => {
  const ref = useClickAway(() => onClose && onClose());
  const el = useMemo(() => document?.createElement('div'), []);

  useEffect(() => {
    document?.body?.appendChild(el);
    return () => {
      if (document?.body?.lastElementChild === el) document?.body?.removeChild(el);
    };
  }, []);

  return createPortal(
    <div
      className={cls(
        isOpen ? 'block' : 'hidden',
        'bg-gray-3-op z-10 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'
      )}>
      <div
        ref={ref as LegacyRef<HTMLDivElement>}
        className={cls(
          'flex flex-col justify-end p-[32px] rounded-[48px] bg-white shadow-lg',
          className
        )}>
        {children}
      </div>
    </div>,
    el
  );
};

export default Model;
