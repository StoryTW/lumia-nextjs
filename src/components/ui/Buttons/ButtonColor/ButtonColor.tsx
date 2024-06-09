import React, { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './ButtonColor.module.scss';

// type TButtonColor = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & PropsWithChildren;

type TButtonColor = HTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const ButtonColor = ({ children, ...props }: TButtonColor) => {
  return (
    <button className={styles.btnLink} {...props}>
      {children}
    </button>
  );
};
