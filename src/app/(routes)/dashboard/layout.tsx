import SideBar from '@components/molecules/SideBar';
import { ReactNode } from 'react';
import RecoilRootProvider from '@stores/RecoilRootProvider';

const DashBoardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRootProvider>
      <div className="flex bg-gray-2">
        <SideBar />
        {children}
      </div>
    </RecoilRootProvider>
  );
};

export default DashBoardLayout;
