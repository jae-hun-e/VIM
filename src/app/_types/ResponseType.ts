export interface ResponseType<T> {
  isSuccess: boolean;
  code: number;
  message: string;
  data?: T;
  errors?: LoginErrorType[];
}

export interface LoginErrorType {
  field: 'password' | 'username';
  value: string;
  code: 'invalid';
  message: string;
}

export interface ResponseLogin {
  errors: [];
}

export interface ResponseAdminConfig {
  id: number;
  key: string;
  value: string;
}

export interface ResponsePeople {
  ipAddress: string;
  macAddress: string;
  name: string;
  floor: number;
  department: string;
  isComputer: boolean;
}

export interface ResponseRemainIP {
  floor: number;
  ipAddress: string[];
}

export interface StatusListProps {
  key: string;
  addressList: ResponsePeople[];
}

export type StatusList = StatusListProps[];
