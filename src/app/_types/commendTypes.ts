import { ReactNode } from 'react';
import { ResponsePeople } from '@/app/_types/ResponseType';

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
