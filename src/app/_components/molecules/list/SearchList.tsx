'use client';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';

import Box from '@components/atoms/Box';
import { routerHref } from '@constants/constantsList';
import { Layout } from '@customTypes/commendTypes';
import { searchList, selectedPeople } from '@stores/atoms';
import { cls } from '@utils/utils';

interface SearchListProps {
  layOut?: Layout;
}

const SearchList = ({ layOut = Layout.flex }: SearchListProps) => {
  const list = useRecoilValue(searchList);
  const [selected, setSelectedPeople] = useRecoilState(selectedPeople);

  const handleSelected = (idx: number) => {
    setSelectedPeople({ idx, info: list && list[idx] });
  };

  return (
    <article className={cls(layOut, 'gap-[32px]')}>
      {list?.map((peopleInfo, idx) => {
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
