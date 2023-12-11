export const APP_TITLE = '비비아이피병원';

export const routerHref = {
  admin: '/dashboard/admin',
  allocationIP: '/dashboard/allocationIP',
  remainIP: '/dashboard/allocationIP/remainIP',
  statusIP: '/dashboard/statusIP',
  managementIP: '/dashboard/managementIP'
};

export const constantsList = [
  { id: 1, href: routerHref.admin, title: 'admin', value: '관리 페이지' },
  { id: 2, href: routerHref.allocationIP, title: 'allocationIP', value: '할당 IP' },
  { id: 3, href: routerHref.statusIP, title: 'statusIP', value: 'IP 현황' },
  { id: 4, href: routerHref.managementIP, title: 'managementIP', value: 'IP 관리' }
];

export const defaultSettingState = [
  { title: 'Gateway', key: 'admin.gateway' },
  { title: 'DNS', key: 'admin.dns' },
  { title: '시작 IP', key: 'admin.startIpAddress' },
  { title: '종료 IP', key: 'admin.endIpAddress' },
  { title: '층 수', key: 'admin.floor' }
];

export const infoIP = [
  { id: 1, title: 'IP address', value: 'IP' },
  { id: 2, title: 'MAC address', value: 'MAC' },
  { id: 3, title: '사원 이름', value: 'people' },
  { id: 4, title: '층 수', value: 'floor' },
  { id: 5, title: '부서 명', value: 'department' }
];

export const statusTabList = [
  { id: 1, koTitle: '층별', title: 'floor' },
  { id: 2, koTitle: '부서별', title: 'department' }
];
