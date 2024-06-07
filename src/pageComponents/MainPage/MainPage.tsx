'use client';
import { MainSection } from '@/components/sections/MainSection/MainSection';
import styles from './MainPage.module.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import { Footer } from '@/layouts/Footer/Footer';
import { useVideoStore } from '@/store/useVideoStore';

export function MainPage() {
  const timeCode = useVideoStore((state) => state.timeCode);

  return (
    <main id='mainPage' className={styles.mainPage}>
      <ReactFullpage
        // licenseKey={'YOUR_KEY_HERE'}
        credits={{ enabled: false }}
        scrollingSpeed={1000}
        onLeave={(origin) => {
          if (origin.index === 0 && timeCode !== 53) {
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
                <section>
                  First
                </section>
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </main>
  );
}
