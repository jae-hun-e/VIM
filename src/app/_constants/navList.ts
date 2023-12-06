export const routerHref = {
  admin: '/dashboard/admin',
  allocationIP: '/dashboard/allocationIP',
  remainIP: '/dashboard/allocationIP/remainIP',
  statusIP: '/dashboard/statusIP',
  managementIP: '/dashboard/managementIP'
};

export const navList = [
  { id: 1, href: routerHref.admin, title: 'admin', value: '관리 페이지' },
  { id: 2, href: routerHref.allocationIP, title: 'allocationIP', value: '할당 IP' },
  { id: 3, href: routerHref.statusIP, title: 'statusIP', value: 'IP 현황' },
  { id: 4, href: routerHref.managementIP, title: 'managementIP', value: 'IP 관리' }
];

export const infoIP = [
  { id: 1, title: 'IP address', value: 'IP' },
  { id: 2, title: 'MAC address', value: 'MAC' },
  { id: 3, title: '사원 이름', value: 'people' },
  { id: 4, title: '층 수', value: 'floor' },
  { id: 5, title: '부서 명', value: 'department' }
];
