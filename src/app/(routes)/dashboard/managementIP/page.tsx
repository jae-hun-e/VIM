'use client';
import SearchBar from '@components/molecules/SearchBar';
import Box from '@components/atoms/Box';
import SearchList from '@components/molecules/SearchList';
import { reqSearch } from '@constants/dummyData';
import { Layout } from '@/app/_types/commendTypes';
import InfoModel from '@components/molecules/InfoModel';
import { useRecoilState } from 'recoil';
import { selectedPeople } from '@stores/atoms';

const ManagementIP = () => {
  const [selected, setSelectedPeople] = useRecoilState(selectedPeople);

  const notSelectedPeople = () => {
    setSelectedPeople({ ...selected, info: null });
  };

  return (
    <Box className="flex flex-col w-full max-h-[90vh] pt-0 gap-[32px] ">
      <SearchBar />
      <SearchList searchList={reqSearch} layOut={Layout.grid} />
      {selected.info !== null ? (
        <InfoModel handleClose={notSelectedPeople} info={selected.info} />
      ) : null}
    </Box>
  );
};
export default ManagementIP;
