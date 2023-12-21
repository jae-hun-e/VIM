import { ReactNode } from 'react';

const StatusIPLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full min-h-2/3 flex gap-[32px] justify-start items-center">
      {children}
    </section>
  );
};

export default StatusIPLayout;
