'use client';
import SearchBar from '@components/organisms/SearchBar';
import Box from '@components/atoms/Box';
import SearchList from '@components/molecules/SearchList';
import { Layout } from '@/app/_types/commendTypes';
import InfoModel from '@components/organisms/InfoModel';
import { useRecoilValue } from 'recoil';
import { selectedPeople } from '@stores/atoms';
import { useEffect, useState } from 'react';

const ManagementIP = () => {
  const selected = useRecoilValue(selectedPeople);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!!selected.info) setVisible(true);
  }, [selected]);

  const handleCloseModel = () => {
    setVisible(!visible);
  };

  return (
    <Box className="flex flex-col w-full min-h-[50vh] max-h-[90vh] pt-0 gap-[32px] ">
      <SearchBar />
      <SearchList layOut={Layout.grid} />
      {visible && <InfoModel info={selected.info} visible={visible} onClose={handleCloseModel} />}
    </Box>
  );
};
export default ManagementIP;
