import Box from '@components/atoms/Box';
import SearchBar from '@components/organisms/SearchBar';
import SearchList from '@components/molecules/SearchList';

const FindInfo = () => {
  return (
    <Box className="w-1/5 max-w-[384px] h-[984px] flex flex-col pt-[0px]">
      <SearchBar />
      <SearchList />
    </Box>
  );
};

export default FindInfo;
