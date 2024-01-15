import { defaultSettingState } from '@constants/constantsList';

export interface LoginFormProps {
  username: string;
  password: string;
}

export interface AdminConfig {
  [keys: string]: string;
}

export interface AdminFloor {
  floors: Floor[];
}
interface Floor {
  floor: number;
  startIpAddress: string;
  endIpAddress: string;
}
export interface InsertUploadProps {
  ipAddress: string;
  macAddress: string;
  name: string;
  floor: number;
  department: string;
  isComputer: boolean;
}

export interface InsertUploadBulkProps {
  층수: number;
  부서: string;
  'MAC Address': string;
  'IP Address': string;
  '담당 사원 이름': string;
  용도: string;
}

export interface SearchProps {
  keyword: string;
  value: string;
}
