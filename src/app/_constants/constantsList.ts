import { InfoIPProps } from '@customTypes/commendTypes';

export const APP_TITLE = '비비아이피병원';

export const routerHref = {
  dashboard: '/dashboard',
  admin: '/dashboard/admin',
  allocationIP: '/dashboard/allocationIP',
  remainIP: '/dashboard/remainIP',
  statusIP: '/dashboard/statusIP',
  managementIP: '/dashboard/managementIP'
};

export const constantsList = [
  { id: 1, href: routerHref.admin, title: 'admin', value: '관리 페이지' },
  {
    id: 2,
    href: routerHref.allocationIP,
    title: 'allocationIP',
    value: '할당 IP'
  },
  { id: 3, href: routerHref.statusIP, title: 'statusIP', value: 'IP 현황' },
  {
    id: 4,
    href: routerHref.managementIP,
    title: 'managementIP',
    value: 'IP 관리'
  }
];

export const defaultSettingState = [
  { title: 'Gateway', type: 'admin_gateway_ip_address' },
  { title: 'DNS', type: 'admin_dns_address' },
  { title: '시작 IP', type: 'admin_start_ip_address' },
  { title: '종료 IP', type: 'admin_end_ip_address' },
  { title: '서브넷', type: 'admin_subnet_mask_key' },
  { title: '층 수', type: 'admin_floor' }
];

export const infoIP: Array<InfoIPProps> = [
  { id: 1, title: 'IP address', type: 'ipAddress' },
  { id: 2, title: 'MAC address', type: 'macAddress' },
  { id: 3, title: '사원 이름', type: 'name' },
  { id: 4, title: '층 수', type: 'floor' },
  { id: 5, title: '부서 명', type: 'department' },
  { id: 6, title: '용도', type: 'isComputer' }
];

export const statusTabList = [
  { id: 1, koTitle: '층별', title: 'floor' },
  { id: 2, koTitle: '부서별', title: 'dept' }
];

export const dropBoxList = [
  { id: 1, name: '이름', type: 'name' },
  { id: 2, name: 'IP', type: 'ip' },
  { id: 3, name: 'MAC', type: 'mac' }
];
