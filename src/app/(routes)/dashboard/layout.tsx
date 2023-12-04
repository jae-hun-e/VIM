import SideBar from '@components/molecules/SideBar';
import { ReactNode } from 'react';

const DashBoardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex bg-gray-2">
      <SideBar />
      {children}
    </div>
  );
};

export default DashBoardLayout;
