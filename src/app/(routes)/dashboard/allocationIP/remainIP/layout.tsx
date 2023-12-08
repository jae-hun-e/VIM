import { ReactNode } from 'react';
import Box from '@components/atoms/Box';
import BackBtn from '@components/molecules/BackBtn';
import { routerHref } from '@constants/navList';

const RemainIPLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box className="w-full h-full">
      <header className="flex gap-[24px] items-center mb-[40px]">
        <BackBtn onBackHref={routerHref.allocationIP} />
        <p className="text-[24px]">잔여 IP</p>
      </header>
      {children}
    </Box>
  );
};

export default RemainIPLayout;
