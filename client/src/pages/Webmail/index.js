import React from 'react'
import style from './style.module.css'
import bgimg from '../../assets/images/questionPage.png'
import { Footer } from '../../components/Footer'
import { SocialIcons } from '../../components/SocialMedia'

export const WebmailError = () => {
  return (
    <section className={style.P404}>
      <img src={bgimg} className={style.bgimg} alt='bgimg' />
      <section className={style.section}>
        <main role='main' className={style.main_content}>
          <div className={style.titleCont}>
            <h1 className={style.main_title + ' heading-font'}>
              Sorry for the inconvenience. <br /> Webmail is currently down, please try again later
              <br />
            </h1>
          </div>
        </main>
      </section>
      <SocialIcons />
      <Footer />
    </section>
  )
}
