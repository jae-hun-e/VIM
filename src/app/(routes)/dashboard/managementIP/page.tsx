'use client';
import SearchList from '@components/molecules/list/SearchList';
import { Layout } from '@/app/_types/commendTypes';
import InfoModel from '@components/organisms/InfoModel';
import { useRecoilState } from 'recoil';
import { selectedPeople } from '@stores/atoms';
import { useEffect, useState } from 'react';

const ManagementIP = () => {
  const [selected, setSelected] = useRecoilState(selectedPeople);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!!selected.info) setVisible(true);
  }, [selected]);

  const handleCloseModel = () => {
    setVisible(!visible);
    setSelected({ idx: null, info: null });
  };

  return (
    <>
      <SearchList layOut={Layout.grid} />
      {visible && <InfoModel info={selected.info} visible={visible} onClose={handleCloseModel} />}
    </>
  );
};
export default ManagementIP;
