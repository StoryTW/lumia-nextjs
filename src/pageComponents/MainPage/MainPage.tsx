import { MainSection } from '@/components/sections/MainSection/MainSection';
import styles from './MainPage.module.scss';

export function MainPage() {
  return (
    <main id='mainPage' className={styles.mainPage}>
      <MainSection />
    </main>
  );
}
