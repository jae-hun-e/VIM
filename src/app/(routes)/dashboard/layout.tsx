import SideBar from '@components/molecules/SideBar';
import { ReactNode } from 'react';
import RecoilRootProvider from '@stores/RecoilRootProvider';
const DashBoardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRootProvider>
      <div className="flex bg-gray-2">
        <SideBar />
        <div className="mx-[40px] mt-[56px] mb-[40px] w-full box-border flex justify-start items-center">
          {children}
        </div>
      </div>
    </RecoilRootProvider>
  );
};

export default DashBoardLayout;
