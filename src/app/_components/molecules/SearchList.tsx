'use client';
import Box from '@components/atoms/Box';
import { cls } from '@utils/util';
import { useState } from 'react';
import { SearchPeople } from '@/app/_types/ResponseType';

interface SearchListProps {
  searchList: SearchPeople[];
}

const SearchList = ({ searchList }: SearchListProps) => {
  const [selected, setSelected] = useState<number>(0);

  const handleSelected = (idx: number) => {
    setSelected(idx);
  };
  return (
    <article className="flex flex-col gap-[32px]">
      {searchList.map(({ ipAddress, macAddress, department }, idx) => {
        return (
          <Box
            key={ipAddress}
            className={cls(idx === selected ? 'border-main' : '', 'border-[1px] rounded-[16px]')}
            onClick={() => handleSelected(idx)}>
            <p>부서 : {department}</p>
            <p>MAX : {macAddress}</p>
            <p>IP : {ipAddress}</p>
          </Box>
        );
      })}
    </article>
  );
};

export default SearchList;
