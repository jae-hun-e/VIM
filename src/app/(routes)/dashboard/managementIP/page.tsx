'use client';
import { useRecoilState } from 'recoil';

import { useEffect, useState } from 'react';

import SearchList from '@components/molecules/list/SearchList';
import InfoModel from '@components/organisms/InfoModel';
import { Layout } from '@customTypes/commendTypes';
import { selectedPeople } from '@stores/atoms';

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
      {visible && (
        <InfoModel
          info={selected.info}
          visible={visible}
          onClose={handleCloseModel}
        />
      )}
    </>
  );
};
export default ManagementIP;
