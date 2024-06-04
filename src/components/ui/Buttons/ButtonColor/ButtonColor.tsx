import type { LinkProps } from 'next/link';
import Link from 'next/link';
import React, { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import styles from './ButtonColor.module.scss';

type TButtonColor = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & PropsWithChildren;

export const ButtonColor = ({ href, children, ...props }: TButtonColor) => {
  return (
    <Link href={href} className={styles.btnLink} {...props}>
      {children}
    </Link>
  );
};
