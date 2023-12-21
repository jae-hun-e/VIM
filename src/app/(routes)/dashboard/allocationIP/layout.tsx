import { ReactNode } from 'react';

const AllocationIPLayout = ({ children }: { children: ReactNode }) => {
  return <section className="flex gap-[20px] w-full">{children}</section>;
};

export default AllocationIPLayout;
