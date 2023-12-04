import SideBar from '@components/molecules/SideBar';
import { ReactNode } from 'react';

const DashBoardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
};

export default DashBoardLayout;
