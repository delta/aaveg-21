import React from 'react'
import styles from './style.module.css'
import { Parallax, ParallaxLayer } from 'react-spring/addons'
import bgimg from '../../assets/images/loginPage.png'
import pillar from '../../assets/images/bgImg.png'
import white from '../../assets/images/white.png'
import moon from '../../assets/images/moon.png'
import cloud from '../../assets/images/cloud.svg'
import aaveg from '../../assets/images/aavegwhite.png'

export const Home = () => {
  return (
    <>
      <Parallax pages={5} style={{ position: 'fixed' }}>
        {/* pages should be changed according to content */}

        <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 1 }}>
          <div id='stars' />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 1 }}>
          <div id='stars2' />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 1 }}>
          <div id='stars3' />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5} style={{ opacity: 1 }}>
          <img src={bgimg} alt='cloud' className={styles.bgimg} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.25} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.85} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '5%', marginLeft: '2%' }} />
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '10%', marginLeft: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '85%' }} />
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '15%', marginLeft: '10%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '10%', marginLeft: '25%' }} />
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '15%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={0.6} style={{ opacity: 0.3 }}>
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '10%', marginLeft: '85%' }} />
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '15%', marginLeft: '20%' }} />
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '23%', marginLeft: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.8} speed={0.1} style={{ opacity: 0.4 }}>
          <img src={white} alt='white' className={styles.light} />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.4} style={{ opacity: 0.5 }}>
          <img src={moon} alt='moon' className={styles.moon} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.99} speed={0.1} style={{ opacity: 1 }}>
          <img src={pillar} alt='pillar' className={styles.pillar} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} speed={-0.1} style={{ pointerEvents: 'none' }}>
          <div className={styles.topDiv}>
            <div className={styles.topCont}>
              <h1 className='heading-font'>A Pawn's Gambit
              </h1>
              <h3>5 Teams. 1 Crown. All Aaveg!</h3>
              <hr />
              <span>A saga set into motion by Aaveg Content <br />Team  &#8482; -‘21 </span>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={-0.5} style={{ pointerEvents: 'none' }}>
          <img src={aaveg} alt='satellite' style={{ width: '15%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={-0.7} style={{ pointerEvents: 'none' }} />
        <div className={styles.div}>
          Every eye glimmered with hope and every heart ached for exuberance and the hustle and bustle of college life. The campus was our promised land, but we were greeted with months of monotony packed with a marathon of classes, assignments, CT’s, deadlines and exams.
          <br />
          <br />

          Fret not, for Aaveg is here! We are the harbingers of change and it is about time to rid yourself of the drudgery of routine and unleash your true inner self.
          <br />
          <br />

          Ever since the inception of the universe, the mortal realm has been split on the basis of various religion, cultures and languages. Here we present to you Panchalokha : a utopian world where none of this matters. The people of this world are divided into 5 kingdoms but are still united by their common respect to Shakthi, the supreme empress.
          <br />
          <br />

          The kind and patient ruler of Panchalokha is firm, yet motherly. She breathes life into all but is unyielding to injustice. She is the omnipresent energy that binds all life. Shakthi guides her people to prosperity and is the epitome of peace.
          <br />
          <br />

          With your eyes set on the future, do you have the mettle to experience Panchalokha and seize the opportunity to lead and conquer?
          <br />
          <br />

          Find your role in all of this and prepare yourself for a contest of wits and strengths. Which clan will have the privilege of drafting you into their ranks?
        </div>
      </Parallax>
    </>
  )
}
