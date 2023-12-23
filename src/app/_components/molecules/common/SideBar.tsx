'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { useState } from 'react';

import FailModel from '@components/organisms/FailModel';
import { APP_TITLE, constantsList, routerHref } from '@constants/constantsList';
import useCheckPath from '@hooks/useCheckPath';
import { isDefaultSetup, searchList } from '@stores/atoms';
import { cls } from '@utils/utils';

const SideBar = () => {
  const [tab, setTab] = useCheckPath();
  const isSetup = useRecoilValue(isDefaultSetup);
  const setList = useSetRecoilState(searchList);
  const router = useRouter();
  const [openModel, setOpenModel] = useState<boolean>(false);

  const handleTab = (title: string, href: string) => {
    if (!isSetup) {
      setOpenModel(!openModel);
      return;
    }
    setTab(title);
    setList(null);
    router.push(href);
  };

  return (
    <section className="flex flex-col min-w-[244px] h-screen min-h-[1080px]  bg-default">
      <Link
        href={routerHref.dashboard}
        className="text-[24px] font-bold my-[40px] ml-[24px] text-white cursor-pointer">
        {APP_TITLE}
      </Link>
      <nav className="flex flex-col text-gray-4">
        {constantsList.map((nav) => (
          <div
            key={nav.id}
            className={cls(
              'h-[63px] pl-[24px] pt-[20px] cursor-pointer',
              tab === nav.title
                ? 'bg-gray-4 text-main font-bold border-r-4 border-main'
                : ''
            )}
            onClick={() => handleTab(nav.title, nav.href)}>
            {nav.value}
          </div>
        ))}
      </nav>
      <FailModel
        openModel={openModel}
        closeModel={() => setOpenModel(!openModel)}
      />
    </section>
  );
};

export default SideBar;
