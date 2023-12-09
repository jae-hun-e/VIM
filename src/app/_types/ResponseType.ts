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
  ipArr: string[];
}

export interface ResponseLogin {
  isSuccess: boolean;
  code: number;
  message: string;
  data: object;
}
