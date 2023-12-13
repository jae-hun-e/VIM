'use client';
import SearchBar from '@components/organisms/SearchBar';
import Box from '@components/atoms/Box';
import SearchList from '@components/molecules/SearchList';
import { Layout } from '@/app/_types/commendTypes';
import InfoModel from '@components/molecules/InfoModel';
import { useRecoilState } from 'recoil';
import { selectedPeople } from '@stores/atoms';
import { useState } from 'react';

const ManagementIP = () => {
  const [selected, setSelectedPeople] = useRecoilState(selectedPeople);

  const handleOpenModel = () => {
    setSelectedPeople({ idx: selected.idx, info: null });
  };

  return (
    <Box className="flex flex-col w-full min-h-[50vh] max-h-[90vh] pt-0 gap-[32px] ">
      <SearchBar />
      <SearchList layOut={Layout.grid} />
      {selected.info && <InfoModel openModel={handleOpenModel} info={selected.info} />}
    </Box>
  );
};
export default ManagementIP;
