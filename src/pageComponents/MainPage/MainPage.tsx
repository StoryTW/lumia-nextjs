import { MainSection } from '@/components/sections/MainSection/MainSection';
import styles from './MainPage.module.scss';
import { SecondSection } from '@/components/sections/SecondSection/SecondSection';

export function MainPage() {
  return (
    <main id='mainPage' className={styles.mainPage}>
      <MainSection />
      <SecondSection />
    </main>
  );
}
