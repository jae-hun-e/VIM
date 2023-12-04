'use client';
import Link from 'next/link';

const SideBar = () => {
  return (
    <section className="flex flex-col w-1/5 h-screen bg-gray-200">
      <h1 className="text-3xl text-center font-bold mb-6">비비아이피 병원</h1>
      <Link href={'/admin'}> 관리 페이지 </Link>
      <Link href={'/allocationIP'}> 할당 IP </Link>
      <Link href={'/managementIP'}> IP 현황 </Link>
      <Link href={'/statusIP'}> IP 관리 </Link>
    </section>
  );
};

export default SideBar;
