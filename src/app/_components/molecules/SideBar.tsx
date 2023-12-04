'use client';
import Link from 'next/link';
import { cls } from '@utils/util';
import { useState } from 'react';

const SideBar = () => {
  const [tab, setTab] = useState<string>('admin');

  const navList = [
    { id: 1, href: '/dashboard/admin', title: 'admin', value: '관리 페이지' },
    { id: 2, href: '/dashboard/allocationIP', title: 'allocation', value: '할당 IP' },
    { id: 3, href: '/dashboard/statusIP', title: 'status', value: 'IP 현황' },
    { id: 4, href: '/dashboard/managementIP', title: 'management', value: 'IP 관리' }
  ];
  return (
    <section className="flex flex-col w-1/5 h-screen bg-default ">
      <h1 className="text-3xl font-bold my-[40px] mx-[24px] text-white">비비아이피 병원</h1>
      <nav className="flex flex-col text-gray-4">
        {navList.map((nav) => (
          <Link
            key={nav.id}
            href={nav.href}
            className={cls(
              'h-[63px] pl-[24px] pt-[20px]',
              tab === nav.title ? 'bg-gray-4 text-main font-bold border-r-4 border-main' : ''
            )}
            onClick={() => setTab(nav.title)}>
            {nav.value}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default SideBar;
