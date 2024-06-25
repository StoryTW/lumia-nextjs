import React from 'react';
import styles from './FirstBlock.module.scss';
import Image from 'next/image';

const polygonBlocks = [
  {
    image: (
      <Image
        src={'/polygonLogo.svg'}
        alt='logoPolygon'
        width={24}
        height={22}
        quality={100}
        priority
      />
    ),
    text: 'Polygon ID (KYC)',
  },
  {
    image: (
      <Image
        src={'/polygonLogo.svg'}
        alt='logoPolygon'
        width={24}
        height={22}
        quality={100}
        priority
      />
    ),
    text: 'Polygon Miden (Privacy)',
  },
  {
    image: (
      <Image
        src={'/polygonLogo.svg'}
        alt='logoPolygon'
        width={24}
        height={22}
        quality={100}
        priority
      />
    ),
    text: 'Parallel EVM',
  },
  {
    image: (
      <Image
        src={'/accountAbstraction.png'}
        alt='logoPolygon'
        width={23}
        height={23}
        quality={100}
        priority
      />
    ),
    text: 'Account Abstraction',
  },
];

export const FirstBlock = () => {
  return (
    <div className={styles.firstBlock}>
      <div className={styles.header}>
        <Image src={'/logo.svg'} alt='logo' height={34} width={131} priority quality={100} />
        <div className={styles.textHeader}>Layer 2</div>
      </div>
      <div className={styles.blocks}>
        <div className={styles.execution}>
          <div className={styles.name}>
            <div className={styles.text}>execution</div>
          </div>
          <div className={styles.content}>
            <div className={styles.polygon}>
              <div className={styles.polygonHeader}>
                <Image
                  src={'/polygon.svg'}
                  height={21}
                  width={121}
                  alt='polygon'
                  priority
                  quality={100}
                />
                <div className={styles.cdkText}>cdk</div>
              </div>

              <div className={styles.polygonContent}>
                {polygonBlocks.map((block, index) => {
                  return (
                    <div className={styles.polygonBlock} key={index}>
                      {block.image}
                      <div className={styles.text}>{block.text}</div>
                    </div>
                  );
                })}
              </div>
              <Image
                src={'/oneArrow.svg'}
                alt='arrow'
                height={22}
                width={14}
                priority
                quality={100}
                className={styles.arrowOne}
              />
            </div>

            <a href='https://lumia.stream' target='_blank' className={styles.lumiaStream}>
              <Image
                src={'/lumiaOnlyLogo.svg'}
                alt='logo'
                width={21}
                height={21}
                priority
                quality={100}
              />
              <div className={styles.text}>lumia stream</div>
            </a>
          </div>
          <Image
            src={'/oneArrow.svg'}
            alt='arrow'
            height={22}
            width={14}
            priority
            quality={100}
            className={styles.arrowOne}
          />
        </div>

        <div className={styles.da}>
          <div className={styles.name}>
            <div className={styles.text}>da</div>
          </div>
          <div className={styles.content}>
            <div className={styles.contentBlock}>
              <div className={styles.info}>
                <Image src={'/near.svg'} width={98} height={26} alt='near' priority quality={100} />
                <div className={styles.textDa}>DA</div>
              </div>
              <div className={styles.description}>(Cheap TXs)</div>
            </div>
            <div className={styles.contentBlock}>
              <div className={styles.info}>
                <Image
                  src={'/polygonLogo.svg'}
                  width={23}
                  height={21}
                  alt='near'
                  priority
                  quality={100}
                />
                <div className={styles.textDa}>Polygon AggLayer</div>
              </div>
              <div className={styles.description}>(zk Unified Liquidity)</div>
            </div>
          </div>
          <Image
            src={'/oneArrow.svg'}
            alt='arrow'
            height={22}
            width={14}
            priority
            quality={100}
            className={styles.arrowOne}
          />
        </div>

        <div className={styles.settlement}>
          <div className={styles.name}>
            <div className={styles.text}>settlement</div>
          </div>
          <div className={styles.content}>
            <div className={styles.contentBlock}>
              <Image
                src={'/ethereum.svg'}
                width={186}
                height={58}
                alt='eth'
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={'/arrows.svg'}
        alt='arrows'
        height={22}
        width={120}
        priority
        quality={100}
        className={styles.arrows}
      />
      <Image
        src={'/arrows.svg'}
        alt='arrows'
        height={22}
        width={100}
        priority
        quality={100}
        className={styles.arrowsBottom}
      />
    </div>
  );
};
