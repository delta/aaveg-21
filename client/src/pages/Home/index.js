import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { Parallax, ParallaxLayer } from 'react-spring/addons'
import bgimg from '../../assets/images/temple-right.png'
import pillar from '../../assets/images/bgImg1.png'
import kingdom from '../../assets/images/bgImg2.png'
import white from '../../assets/images/white.png'
import moon from '../../assets/images/moon.png'
import cloud from '../../assets/images/cloud.svg'
import aaveg from '../../assets/images/aavegwhite.png'
import { Footer } from '../../components/Footer'
import { SocialIcons } from '../../components/SocialMedia'

export const Home = () => {
  const [height, setHeight] = useState(-1)
  const history = useHistory()
  useEffect(() => {
    const l = () => {
      try {
        let hei = document.getElementById('content-div').offsetHeight
        hei = hei / window.innerHeight
        hei += 2.5
        setHeight(hei)
        document.getElementById('pillar').style.height = (hei - 1.4) * 100 + 'vh'
      } catch (e) {
        console.log(e)
      }
    }
    const k = () => {
      if (height === -1) {
        if (document.getElementById('content-div')) {
          setTimeout(l, 500)
        } else {
          setTimeout(k, 500)
        }
      }
    }
    k()
  }, [height])
  return (
    <div className={styles.totalDiv}>
      <Parallax pages={height} style={{ position: 'fixed' }}>

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
          <img src={bgimg} alt='temple' className={styles.bgimg} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.25} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.85} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.4} style={{ opacity: 0.1 }}>
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '85%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '10%', marginLeft: '25%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={0.6} style={{ opacity: 0.3 }}>
          <img src={cloud} alt='cloud' style={{ display: 'block', width: '10%', marginLeft: '85%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.8} speed={0.1} style={{ opacity: 0.4 }}>
          <img src={white} alt='white' className={styles.light} />
        </ParallaxLayer>

        <ParallaxLayer offset={height - 0.9} speed={0.4} style={{ opacity: 0.5 }}>
          <img src={moon} alt='moon' className={styles.moon} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.99} speed={0.1} style={{ opacity: 1 }}>
          <img src={pillar} alt='pillar' id='pillar' className={styles.pillar} />
        </ParallaxLayer>

        <ParallaxLayer offset={height - 0.94} speed={0.1} style={{ opacity: 1 }}>
          <img src={kingdom} alt='kingdom' className={styles.kingdom} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} speed={-0.1} style={{ pointerEvents: 'none' }}>
          <div className={styles.topDiv}>
            <div className={styles.topCont}>
              <h1 className={styles.h1 + ' heading-font'}>A Pawn's Gambit</h1>
              <h3 className={styles.h3}>5 Teams. 1 Crown. All Aaveg!</h3>
              <span className={styles.credits}>A saga set into motion by Aaveg Content <br />Team <span className={styles.tm}>TM</span> -‘21 </span>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={-0.5} style={{ pointerEvents: 'none' }}>
          <img src={aaveg} alt='satellite' style={{ width: '15%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={-0.7} style={{ pointerEvents: 'none' }} />
        <div className={styles.div} id='content-div'>
          <div>
            Every eye glimmered with hope and every heart ached for exuberance and the hustle and bustle of college life. The campus was our promised land, but we were greeted with months of monotony packed with a marathon of classes, assignments, CT’s, deadlines and exams.
          </div>
          <br />
          <div>
            Fret not, for Aaveg is here! We are the harbingers of change and it is about time to rid yourself of the drudgery of routine and unleash your true inner self.
          </div>
          <br />
          <div>
            Ever since the inception of the universe, the mortal realm has been split on the basis of various religions, cultures and languages. Here we present to you Panchalokha : a utopian world where none of this matters. The people of this world are divided into 5 kingdoms but are still united by their devotion to Shakthi, the supreme empress.
          </div>
          <br />
          <div>
            The kind and patient ruler of Panchalokha is firm, yet motherly. She breathes life into all but is a formidable enemy to any form of injustice. She is the omnipresent energy that binds all life. Shakthi guides her people to prosperity and is the epitome of peace.
          </div>
          <br />
          <div>
            With your eyes set on the future, do you have the mettle to experience Panchalokha and seize the opportunity to lead and conquer?
          </div>
          <br />
          <div>
            Find your role in all of this and prepare yourself for a contest of wits and strengths. Which clan will have the privilege of drafting you into their ranks?
          </div>
          <div className={styles.btn}><Button className={styles.button} onClick={() => { history.push('/login') }}>Login to Fill Questionnaire</Button></div>
        </div>
      </Parallax>
      <SocialIcons />
      <Footer />
    </div>
  )
}
