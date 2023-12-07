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
