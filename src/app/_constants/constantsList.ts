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
  { title: 'Gateway', type: 'admin_gateway' },
  { title: 'DNS', type: 'admin_dns' },
  { title: '시작 IP', type: 'admin_startIpAddress' },
  { title: '종료 IP', type: 'admin_endIpAddress' },
  { title: '층 수', type: 'admin_floor' }
];

const types = {
  ipAddress: 'ipAddress',
  maxAddress: 'maxAddress',
  name: 'name',
  floor: 'floor',
  department: 'department'
} as const;

type typeList = (typeof types)[keyof typeof types];

export const infoIP: Array<{ id: number; title: string; type: typeList }> = [
  { id: 1, title: 'IP address', type: 'ipAddress' },
  { id: 2, title: 'MAC address', type: 'maxAddress' },
  { id: 3, title: '사원 이름', type: 'name' },
  { id: 4, title: '층 수', type: 'floor' },
  { id: 5, title: '부서 명', type: 'department' }
];

export const statusTabList = [
  { id: 1, koTitle: '층별', title: 'floor' },
  { id: 2, koTitle: '부서별', title: 'department' }
];
