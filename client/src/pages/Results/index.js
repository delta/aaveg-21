import React, { Fragment, useState, useEffect, useRef } from 'react'
import { useStyles } from './styles'
import { Footer } from '../../components/Footer'
import { SocialIcons } from '../../components/SocialMedia'
import HALO from 'vanta/dist/vanta.halo.min'
import Confetti from 'react-dom-confetti'

export const Results = () => {
  const classes = useStyles()
  const [vantaEffect, setVantaEffect] = useState(0)
  const [confetti, setConfetti] = useState(false)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(HALO({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        baseColor: 0x504936,
        backgroundColor: 0x101114,
        amplitudeFactor: 3.00,
        xOffset: -0.29,
        yOffset: -0.14
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const confettiConfig = {
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
  }

  useEffect(() => {
    setTimeout(() => {
      setConfetti(true)
    }, 1000)
  }, [])

  return (
    <>
      <div ref={vantaRef} className={classes.bg}>
        <div className={classes.glass}>
          <Confetti active={confetti} config={confettiConfig} />
          fokrokrokfrokforfor
        </div>
      </div>
      <SocialIcons />
      <Footer />
    </>
  )
}
