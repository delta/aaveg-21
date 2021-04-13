import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/addons'
import bgimg from '../../assets/images/loginPage.png'
import aaveg from '../../assets/images/aaveg.png'
import pillar from '../../assets/images/bgImg.png'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export class Home extends React.Component {
  render () {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={4.5}>

        <ParallaxLayer offset={0} speed={0.5} style={{ opacity: 1 }}>
          <img src={bgimg} alt='cloud' style={{ display: 'block', height: '100vh', width: '100%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '5%', marginLeft: '2%' }} />
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '10%', marginLeft: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '85%' }} />
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '15%', marginLeft: '10%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.99} speed={0.1} style={{ opacity: 1 }}>
          <img src={pillar} alt='pillar' style={{ display: 'block', height: '400vh', width: '100%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} speed={-0.1} style={{ pointerEvents: 'none' }}>
          <img src={aaveg} alt='aaveg' style={{ width: '25%', marginLeft: '2%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={-0.5} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} alt='satellite' style={{ width: '15%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5} style={{ pointerEvents: 'none' }} />

      </Parallax>
    )
  }
}
