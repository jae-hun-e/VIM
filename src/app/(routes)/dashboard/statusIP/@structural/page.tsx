'use client';
import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import FindInfoLoading from '@/app/(routes)/dashboard/statusIP/@findInfo/loading';
import IPByDepartment from '@components/organisms/IPByDepartment';
import IPByFloor from '@components/organisms/IPByFloor';
import { statusTabList } from '@constants/constantsList';
import { getAddress } from '@services/get/getResponse';
import { cls } from '@utils/utils';

const Structural = () => {
  const [tab, setTab] = useState(statusTabList[0].title);

  const { data: statusList, isLoading } = useQuery({
    queryKey: [getAddress, tab],
    queryFn: () => getAddress({ type: tab })
  });

  console.log('data', statusList);
  const handleSelectTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <>
      <header className="flex sticky top-0 pt-[32px] mb-[56px] w-full bg-white">
        {statusTabList.map(({ id, koTitle, title }) => {
          return (
            <p
              key={id}
              className={cls(
                tab === title ? 'border-b-main text-main' : '',
                'w-[85px] text-center border-b z-10 cursor-pointer'
              )}
              onClick={() => handleSelectTab(title)}>
              {koTitle}
            </p>
          );
        })}

        <div className="absolute border-b-2 bottom-0 left-0 right-0" />
      </header>
      {isLoading ? (
        <FindInfoLoading />
      ) : tab === statusTabList[0].title ? (
        statusList?.data && <IPByFloor list={statusList.data} />
      ) : (
        statusList?.data && (
          <IPByDepartment list={statusList && statusList.data} />
        )
      )}
    </>
  );
};

export default Structural;
