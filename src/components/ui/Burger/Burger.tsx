import { FC } from 'react';
import styles from './Burger.module.scss';
import clsx from 'clsx';

interface IBurger {
  openMenu: boolean;
  toggleOpenMenu: () => void;
}

export const Burger: FC<IBurger> = ({ openMenu, toggleOpenMenu }) => {
  return (
    <div className={styles.burger} onClick={toggleOpenMenu}>
      <span
        className={clsx(styles.line, styles.top, {
          [styles.active]: openMenu,
        })}
      />
      <span
        className={clsx(styles.line, styles.bottom, {
          [styles.active]: openMenu,
        })}
      />
    </div>
  );
};
