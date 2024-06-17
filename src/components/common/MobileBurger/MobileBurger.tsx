import { Dispatch, SetStateAction } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './MobileBurger.module.scss';

interface IMobileNav {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export const MobileBurger: React.FC<IMobileNav> = ({ openMenu, setOpenMenu }) => {

  const handleClose = (index?: number) => {
    setOpenMenu(false);
  };

  const navItems = [
    {
      id: 0,
      name: 'ABOUT',
    },
    {
      id: 1,
      name: 'FEATURES',
    },
    {
      id: 2,
      path: '#eleven',
      name: 'ROADMAP',
    },
    {
      id: 2,
      path: '#partners',
      name: 'PARTNERS',
    },
    {
      id: 3,
      path: '#nine',
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
                  return (
                    <li key={item.name} className={styles.list_item}>
                      <a href={item.path as string}>{item.name}</a>
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
