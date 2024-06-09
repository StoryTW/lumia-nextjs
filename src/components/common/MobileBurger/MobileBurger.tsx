import { Dispatch, SetStateAction } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './MobileBurger.module.scss';
import Link from 'next/link';

interface IMobileNav {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  handleNavigate: (index: number) => void;
}

export const MobileBurger: React.FC<IMobileNav> = ({ openMenu, setOpenMenu, handleNavigate }) => {
  const handleCloseMenu = (index?: number) => {
    setOpenMenu(false);
    index && handleNavigate(index);
  };

  const navItems = [
    {
      id: 0,
      onClick: () => handleCloseMenu(1),
      name: 'ABOUT',
    },
    {
      id: 1,
      onClick: () => handleCloseMenu(2),
      name: 'FEATURES',
    },
    {
      id: 2,
      onClick: () => handleCloseMenu(9),
      name: 'ROADMAP',
    },
    {
      id: 2,
      path: '#partners',
      onClick: () => handleCloseMenu(9),
      name: 'PARTNERS',
    },
    {
      id: 3,
      onClick: () => handleCloseMenu(8),
      name: 'AIRDROP',
    },
  ];

  return (
    <AnimatePresence mode='wait'>
      {openMenu && (
        <div className={styles.mobileNav}>
          <div className={styles.wrapper}>
            <motion.div
              className={styles.content}
              initial={{
                x: window.innerWidth,
              }}
              animate={{
                x: 0,
              }}
              exit={{ x: window.outerWidth, opacity: 0 }}
              transition={{ duration: 0.3, bounce: false }}
            >
              <ul className={styles.navigation_list}>
                {navItems.map((item, index) => {
                  if (index === 4) {
                    <li key={item.name} className={styles.list_item}>
                      <Link
                        onClick={() => handleCloseMenu()}
                        href={item.path as string}
                      >
                        {item.name}
                      </Link>
                    </li>;
                  }

                  return (
                    <li key={item.name} className={styles.list_item}>
                      <button className={styles.link} onClick={item.onClick}>
                        {item.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
