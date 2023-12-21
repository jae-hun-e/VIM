import { ReactNode } from 'react';
import { APP_TITLE } from '@constants/constantsList';
import Box from '@components/atoms/Box';

const AdminPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Box className="shadow-2xl min-w-[500px] min-h-[400px]">
        <h2 className="text-main font-bold text-[24px] mb-[24px]"> {APP_TITLE}</h2>
        {children}
      </Box>
    </div>
  );
};

export default AdminPageLayout;
