'use client';
import Box from '@components/atoms/Box';
import { cls } from '@utils/util';
import { ResponsePeople } from '@/app/_types/ResponseType';
import { Layout } from '@/app/_types/commendTypes';
import Link from 'next/link';
import { routerHref } from '@constants/constantsList';
import { useRecoilState } from 'recoil';
import { selectedPeople } from '@stores/atoms';

interface SearchListProps {
  searchList: ResponsePeople[];
  layOut?: Layout;
}

const SearchList = ({ searchList, layOut = Layout.flex }: SearchListProps) => {
  const [selected, setSelectedPeople] = useRecoilState(selectedPeople);

  const handleSelected = (idx: number) => {
    setSelectedPeople({ idx, info: searchList[idx] });
  };

  return (
    <article className={cls(layOut, 'gap-[32px]')}>
      {searchList.map((peopleInfo, idx) => {
        const { ipAddress, floor, macAddress, department } = peopleInfo;
        return (
          <Link key={ipAddress} href={routerHref.managementIP}>
            <Box
              className={cls(
                idx === selected.idx ? 'border-main' : '',
                'border-[1px] rounded-[16px]'
              )}
              onClick={() => handleSelected(idx)}>
              <p>부서 : {department}</p>
              <p>층 : {floor}</p>
              <p>MAX : {macAddress}</p>
              <p>IP : {ipAddress}</p>
            </Box>
          </Link>
        );
      })}
    </article>
  );
};

export default SearchList;
