'use client';
import { MainSection } from '@/components/sections/MainSection/MainSection';
import styles from './MainPage.module.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import { Footer } from '@/layouts/Footer/Footer';
import { useVideoStore } from '@/store/useVideoStore';
import { ParnersSection } from '@/components/sections/ParnersSection/ParnersSection';

export function MainPage() {
  const isEnded = useVideoStore((state) => state.isEnded);
  // const setIsEnded = useVideoStore((state) => state.setIsEnded);

  return (
    <main id='mainPage' className={styles.mainPage}>
      <ReactFullpage
        // licenseKey={'YOUR_KEY_HERE'}
        credits={{ enabled: false }}
        scrollingSpeed={1000}
        onLeave={(origin) => {
          if (origin.index === 0 && !isEnded) {
            return false;
          }
          return true;
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section'>
                <MainSection />
              </div>

              <div className='section'>
                <ParnersSection />
              </div>
              <div className='section'>
                 <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </main>
  );
}
