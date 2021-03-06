import { MouseEventHandler } from 'react';

export type KeyValueString = { [key: string]: string };

export type ButtonType = {
  label: string;
  loading: boolean;
  size?: 'large' | 'medium' | 'small' | 'regular';
  width?: 'half' | 'wide' | 'full';
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rounded?: boolean;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  style?: KeyValueString;
};
