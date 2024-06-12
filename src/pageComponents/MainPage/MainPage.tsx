'use client';
import { MainSection } from '@/components/sections/MainSection/MainSection';
import styles from './MainPage.module.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import { Footer } from '@/layouts/Footer/Footer';
import { useVideoStore } from '@/store/useVideoStore';
import { ParnersSection } from '@/components/sections/ParnersSection/ParnersSection';
import { Header } from '@/layouts/Header/Header';
import { useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function MainPage() {
  const isEnded = useVideoStore((state) => state.isEnded);
  const [currentBlock, setCurrentBlock] = useState(0);
  const setTimeCode = useVideoStore((state) => state.setTimeCode);
  const setStartPlay = useVideoStore((state) => state.setStartPlay);
  const setIsEnded = useVideoStore((state) => state.setIsEnded);

  const mobileL = useMediaQuery('mobileL');

  return (
    <>
      <main id='mainPage' className={styles.mainPage}>
        <ReactFullpage
          // licenseKey={'YOUR_KEY_HERE'}
          credits={{ enabled: false }}
          scrollingSpeed={1000}
          onLeave={(origin) => {
            if (origin.index === 0 && !isEnded) {
              return false;
            } else {
              setCurrentBlock(0);
              setTimeCode(0);
              setStartPlay(false);
              setIsEnded(true);
              return true;
            }
          }}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className='section main'>
                  <Header setCurrentBlock={setCurrentBlock} />
                  <MainSection currentBlock={currentBlock} setCurrentBlock={setCurrentBlock} />
                </div>

                <div className='section partners' id='partners'>
                  <ParnersSection />
                </div>

                {mobileL && (
                  <div className='section footer'>
                    <Footer />
                  </div>
                )}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </main>
    </>
  );
}
