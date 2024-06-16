import React, { AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './ButtonColor.module.scss';
import { LinkProps } from 'next/link';

type TButtonColor = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & PropsWithChildren;

// type TButtonColor = HTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const ButtonColor = ({ children, ...props }: TButtonColor) => {
  return (
    <a className={styles.btnLink} {...props}>
      {children}
    </a>
  );
};
