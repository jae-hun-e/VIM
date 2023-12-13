export interface LoginFormProps {
  username: string;
  password: string;
}

export interface AdminConfig {
  keys: ConfigKey[];
}

interface ConfigKey {
  key: string;
  value: string;
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
}

export interface SearchProps {
  keyword: string;
  value: string;
}
