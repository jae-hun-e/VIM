'use client';
import SearchBar from '@components/molecules/SearchBar';
import Box from '@components/atoms/Box';
import SearchList from '@components/molecules/SearchList';
import { reqSearch } from '@constants/dummyData';
import { Layout } from '@/app/_types/commendTypes';
import InfoModel from '@components/molecules/InfoModel';
import { useRecoilState } from 'recoil';
import { SelectedPeople } from '@stores/atoms';

const ManagementIP = () => {
  const [selectedPeople, setSelectedPeople] = useRecoilState(SelectedPeople);

  const notSelectedPeople = () => {
    setSelectedPeople(null);
  };

  return (
    <Box className="flex flex-col w-full max-h-[90vh] pt-0 gap-[32px] ">
      <SearchBar />
      <SearchList searchList={reqSearch} layOut={Layout.grid} />
      {selectedPeople !== null ? (
        <InfoModel handleClose={notSelectedPeople} info={selectedPeople} />
      ) : null}
    </Box>
  );
};
export default ManagementIP;
