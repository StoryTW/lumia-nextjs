import { SectionThree } from '@/components/sections/SectionThree/SectionThree';
import { SectionFour } from '@/components/sections/SectionFour/SectionFour';
import { SectionFive } from '@/components/sections/SectionFive/SectionFive';
import { SectionSix } from '@/components/sections/SectionSix/SectionSix';
import { SectionSeven } from '@/components/sections/SectionSeven/SectionSeven';
import { SectionEight } from '@/components/sections/SectionEight/SectionEight';
import { SectionNine } from '@/components/sections/SectionNine/SectionNine';
import { Footer } from '@/layouts/Footer/Footer';
import { SectionTen } from '@/components/sections/SectionTen/SectionTen';
import { SectionEleven } from '@/components/sections/SectionEleven/SectionEleven';
import { SectionOne } from '@/components/sections/SectionOne/SectionOne';
import { SectionTwo } from '@/components/sections/SectionTwo/SectionTwo';
import styles from './MainPage.module.scss';

export function MainPage() {
  return (
    <main id='mainPage' className={styles.mainPage}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <SectionEleven />
      <Footer />
    </main>
  );
}
