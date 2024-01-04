import { ReactNode } from 'react';

export interface BtnProps {
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset' | undefined;
}

export interface AtomProps {
  className?: string;
  children?: ReactNode;
}

export enum Layout {
  flex = 'flex flex-col',
  grid = 'grid grid-cols-3'
}

export interface SelectedProps {
  id: number;
  name: string;
  type: string;
}

export interface InfoArrProps {
  title: string;
  type: typeList;
  value?: string | number;
}

export interface DefaultSettingState {
  [key: string]: string;
}

export interface DefaultSettingStateProps {
  title: string;
  type: string;
}

const types = {
  ipAddress: 'ipAddress',
  macAddress: 'macAddress',
  name: 'name',
  floor: 'floor',
  department: 'department',
  isComputer: 'isComputer'
} as const;

type typeList = (typeof types)[keyof typeof types];

export interface InfoIPProps {
  id: number;
  title: string;
  type: typeList;
}
