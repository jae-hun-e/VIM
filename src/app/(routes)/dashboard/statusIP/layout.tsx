import { ReactNode } from 'react';

import Box from '@components/atoms/Box';

const StatusIPLayout = ({
  structural,
  findInfo
}: {
  structural: ReactNode;
  findInfo: ReactNode;
}) => {
  return (
    <section className="w-full min-h-2/3 flex gap-[32px] justify-start items-center">
      <Box className="w-4/5 max-w-[1192px] h-[984px]">{structural}</Box>
      <Box className="w-1/5 max-w-[384px] h-[984px] flex flex-col pt-[0px]">
        {findInfo}
      </Box>
    </section>
  );
};

export default StatusIPLayout;
