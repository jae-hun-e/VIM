import { ReactNode } from 'react';
import Box from '@components/atoms/Box';
import SearchBar from '@components/organisms/SearchBar';

const ManagementIPLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box className="flex flex-col w-full min-h-[50vh] max-h-[90vh] pt-0 gap-[32px] ">
      <SearchBar />
      {children}
    </Box>
  );
};

export default ManagementIPLayout;
