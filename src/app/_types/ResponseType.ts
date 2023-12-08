export interface ResponsePeople {
  ipAddress: string;
  macAddress: string;
  name: string;
  floor: number;
  department: string;
  isComputer: boolean;
}

export interface RemainIP {
  floor: number;
  ipArr: string[];
}
