import { ReactNode } from 'react';

export interface BtnProps {
  className?: string;
  onClick?: () => void;
}

export interface AtomProps {
  className?: string;
  children?: ReactNode;
}
