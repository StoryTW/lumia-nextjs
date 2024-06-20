import React from 'react'
import styles from './SectionSwiper.module.scss'
import { SwiperBlock } from './SwiperBlock/SwiperBlock'

export const SectionSwiper = () => {
  return (
    <section className={styles.sectionAbout}>
      <h2 className={styles.title}>What People Are Saying About Lumia</h2>
      <SwiperBlock />
    </section>
  )
}
