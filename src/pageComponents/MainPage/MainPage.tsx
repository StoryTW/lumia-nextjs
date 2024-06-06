'use client';
import { MainSection } from '@/components/sections/MainSection/MainSection';
import styles from './MainPage.module.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import { Footer } from '@/layouts/Footer/Footer';

export function MainPage() {
  return (
    <main id='mainPage' className={styles.mainPage}>
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        credits={{ enabled: false }}
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section'>
                {/* <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button> */}
                <MainSection />
              </div>

              <div className='section'>
                <section>First</section>
              </div>
              <div className='section'>
                <Footer />
              </div>
              {/* 
              <section>Second</section>
              <section>Third</section> */}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </main>
  );
}
