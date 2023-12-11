'use client';
import { cls } from '@utils/util';
import { useRecoilValue } from 'recoil';
import { isDefaultSetup } from '@stores/atoms';
import useCheckPath from '@hooks/useCheckPath';
import { APP_TITLE, constantsList } from '@constants/constantsList';
import FailModel from '@components/molecules/FailModel';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SideBar = () => {
  const [tab, setTab] = useCheckPath();
  const isSetup = useRecoilValue(isDefaultSetup);
  const router = useRouter();
  const [openModel, setOpenModel] = useState<boolean>(false);

  const handleTab = (title: string, href: string) => {
    if (!isSetup) {
      setOpenModel(!openModel);
      return;
    }
    setTab(title);
    router.push(href);
  };

  return (
    <section className="flex flex-col min-w-[244px] h-screen min-h-[1080px]  bg-default">
      <h1 className="text-[24px] font-bold my-[40px] ml-[24px] text-white">{APP_TITLE}</h1>
      <nav className="flex flex-col text-gray-4">
        {constantsList.map((nav) => (
          <div
            key={nav.id}
            className={cls(
              'h-[63px] pl-[24px] pt-[20px] cursor-pointer',
              tab === nav.title ? 'bg-gray-4 text-main font-bold border-r-4 border-main' : ''
            )}
            onClick={() => handleTab(nav.title, nav.href)}>
            {nav.value}
          </div>
        ))}
      </nav>
      {openModel ? <FailModel handleClose={() => setOpenModel(!openModel)} /> : null}
    </section>
  );
};

export default SideBar;
