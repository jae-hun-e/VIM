'use client';
import Link from 'next/link';
import { cls } from '@utils/util';
import { useRecoilValue } from 'recoil';
import { isIpSetup } from '@stores/atoms';
import useCheckPath from '@hooks/useCheckPath';
import { navList } from '@constants/navList';

const SideBar = () => {
  const [tab, setTab] = useCheckPath();
  const isSetup = useRecoilValue(isIpSetup);

  const handleTab = (title: string) => {
    // if (!isSetup) {
    //   console.log('정보 넣이 임마');
    //   return;
    // }
    setTab(title);
  };

  return (
    <section className="flex flex-col min-w-[244px] h-screen bg-default">
      <h1 className="text-[24px] font-bold my-[40px] ml-[24px] text-white">비비아이피병원</h1>
      <nav className="flex flex-col text-gray-4">
        {navList.map((nav) => (
          <Link
            key={nav.id}
            href={nav.href}
            className={cls(
              'h-[63px] pl-[24px] pt-[20px] ',
              tab === nav.title ? 'bg-gray-4 text-main font-bold border-r-4 border-main' : ''
            )}
            style={{ pointerEvents: !isSetup ? 'auto' : 'none' }}
            onClick={() => handleTab(nav.title)}>
            {nav.value}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default SideBar;
