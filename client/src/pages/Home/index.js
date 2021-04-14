import React from 'react'
import styles from './style.module.css'
import { Parallax, ParallaxLayer } from 'react-spring/addons'
import bgimg from '../../assets/images/loginPage.png'
import aaveg from '../../assets/images/aaveg.png'
import pillar from '../../assets/images/bgImg.png'
import { content } from './utils/content.js'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export const Home = () => {
  return (
    <>
      <Parallax pages={5} style={{ position: 'fixed' }}>
        {/* pages should be changed according to content */}

        <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 1 }}>
          <div id='stars' />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 1 }}>
          <div id='stars2' />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 1 }}>
          <div id='stars3' />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5} style={{ opacity: 1 }}>
          <img src={bgimg} alt='cloud' className={styles.bgimg} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.25} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.85} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '5%', marginLeft: '2%' }} />
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '10%', marginLeft: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '85%' }} />
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '15%', marginLeft: '10%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.99} speed={0.1} style={{ opacity: 1 }}>
          <img src={pillar} alt='pillar' className={styles.pillar} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} speed={-0.1} style={{ pointerEvents: 'none' }}>
          <img src={aaveg} alt='aaveg' style={{ width: '25%', marginLeft: '2%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={-0.5} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} alt='satellite' style={{ width: '15%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.5} style={{ pointerEvents: 'none' }} />
        <div className={styles.div}>
          {content.map((c, index) => {
            return (
              <div className={styles.team} key={index}>
                <h1>{c.name}</h1>
                <span>{c.ctx}</span>
              </div>
            )
          })}
        </div>
      </Parallax>

    </>
  )
}
