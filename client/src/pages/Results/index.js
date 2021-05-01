import React, { Fragment, useState, useEffect, useRef } from 'react'
import { useStyles } from './styles'
import axios from 'axios'
import { BACKEND_API } from '../../config/config'
import { Footer } from '../../components/Footer'
import { SocialIcons } from '../../components/SocialMedia'
import FOG from 'vanta/dist/vanta.fog.min'
import Confetti from 'react-dom-confetti'

import akash from '../../assets/images/akash.png'
import agni from '../../assets/images/agni.png'
import Jal from '../../assets/images/jal.png'
import prithvi from '../../assets/images/prithvi.png'
import vayu from '../../assets/images/vaayu.png'
// import aaveg from '../../assets/images/aavegwhite.png'

export const Results = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(true)
  const [vantaEffect, setVantaEffect] = useState(0)
  const [confetti, setConfetti] = useState(false)
  const vantaRef = useRef(null)
  const [hostel, setHostel] = useState('Not assigned')
  const [cont, setCont] = useState(['', ''])
  const [imgSrc, setSrc] = useState()
  const [confettiConfig, setConfig] = useState({
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 5500,
    stagger: 3,
    width: '10px',
    height: '10px',
    perspective: '500px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
  })

  useEffect(() => {
    if (hostel === 'Not assigned') {
      axios
        .get(BACKEND_API + '/api/auth/info/', { withCredentials: true, credentials: 'include' })
        .then((res) => {
          if (res.status === 200) {
            setHostel(res.data.hostel)
            let highlight = 0x6b00b6
            switch (res.data.hostel) {
              case 'Agni':
                highlight = 0xd97838
                setSrc(agni)
                setCont(['Agni', 'Unleash your flames'])
                setConfig(prev => {
                  prev.colors = ['#fb6300', '#fb0000', '#fffbe5', '#fb6300']
                  return prev
                })
                break
              case 'Akash':
                highlight = 0x7900c0
                setSrc(akash)
                setCont(['Akash', 'Venture among the stars'])
                setConfig(prev => {
                  prev.colors = ['#6a2084', '#4e3788', '#7c2f9c', '#260830']
                  return prev
                })
                break
              case 'Jal':
                highlight = 0x95c0
                setSrc(Jal)
                setCont(['Jal', 'Answer the ocean’s call'])
                setConfig(prev => {
                  prev.colors = ['#19b4c3', '#c4f3f1', '#7de7f3', '#73c9d4']
                  return prev
                })
                break
              case 'Prithvi':
                highlight = 0xc06e
                setSrc(prithvi)
                setCont(['Prithvi', 'The ground trembles in your wake'])
                setConfig(prev => {
                  prev.colors = ['#227960', '#62c39a', '#0ba093', '#158474']
                  return prev
                })
                break
              case 'Vayu':
                highlight = 0x9ce5ff
                setSrc(vayu)
                setCont(['Vayu', 'May the winds guide you'])
                setConfig(prev => {
                  prev.colors = ['#d4fcff', '#d4f1ff', '#87d4fa', '#deeefc']
                  return prev
                })
                break
              default:
                highlight = 0x6b00b6
                break
            }
            setLoading(false)
            setConfetti(true)
            if (!vantaEffect) {
              setVantaEffect(FOG({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: highlight,
                midtoneColor: 0x0,
                lowlightColor: 0x0,
                baseColor: 0x0,
                blurFactor: 0.44,
                speed: 0.50,
                zoom: 1.30
              }))
            }
            return () => {
              if (vantaEffect) vantaEffect.destroy()
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  })

  if (!loading) {
    return (
      <>
        <div ref={vantaRef} className={classes.bg}>
          <div className={classes.center}>
            <Confetti active={confetti} config={confettiConfig} /><br />
          </div>
          <div className={classes.center}>
            <img className={classes.clanLogo} src={imgSrc} alt='Clan' /><br />
            <div className={classes.glass}>
              <div className={classes.title}>You have been chosen by {cont[0]}</div>{cont[1]}
            </div>
          </div>
        </div>
        <SocialIcons />
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <div className={classes.center}>
          Loading
        </div>
      </>
    )
  }
}
