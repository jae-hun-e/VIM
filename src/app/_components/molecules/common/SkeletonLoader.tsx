import { ReactNode } from 'react';

import { cls } from '@utils/utils';

interface Style {
  className?: string;
}

interface ParentsProps extends Style {
  children: ReactNode;
}
const Container = ({ children, className = 'w-full h-full' }: ParentsProps) => {
  return (
    <div
      className={cls('shadow rounded-md p-4 mx-auto animate-pulse', className)}>
      {children}
    </div>
  );
};

const Profile = ({ className = '' }: Style) => {
  return <div className={cls('bg-gray-3 rounded-full', className)} />;
};

const Bar = ({ className = '' }: Style) => {
  return <div className={cls('bg-gray-3 rounded', className)} />;
};

interface TitleProps extends Style {
  title: string;
}
const Title = ({ title, className = '' }: TitleProps) => {
  return <div className={className}>{title}</div>;
};

interface RepeatProps extends ParentsProps {
  repeat?: number;
}
const Box = ({
  children,
  className = 'flex flex-col gap-4',
  repeat = 1
}: RepeatProps) => {
  const repeatArr = new Array(repeat).fill(null);

  return <div className={className}>{repeatArr.map(() => children)}</div>;
};

const SkeletonLoader = Object.assign(Container, {
  Profile,
  Bar,
  Title,
  Box
});

export default SkeletonLoader;
