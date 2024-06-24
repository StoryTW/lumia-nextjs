import React, { AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './ButtonColor.module.scss';
import { LinkProps } from 'next/link';
import clsx from 'clsx';
import IconChevron from '@/assets/images/chevron.svg'

type TButtonColor = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & PropsWithChildren & IBtn;

interface IBtn {
  variant?: string;
}
// type TButtonColor = HTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const ButtonColor = ({ children, variant = "standart", ...props }: TButtonColor) => {
  return (
    <a className={clsx(styles.btnLink , styles[variant])} {...props}>
      {children}
      <IconChevron />
    </a>
  );
};
