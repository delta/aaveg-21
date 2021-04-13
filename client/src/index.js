
import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Routes } from './routes'
import store, { persist } from './store'

import { ToastContainer } from 'react-toastify'
import { NavBar } from './components/NavBar'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { SocialIcons } from './components/SocialMedia'
import { Footer } from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <Routes />
        <NavBar />
        <SocialIcons />
        <Footer />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Parallax, ParallaxLayer } from 'react-spring/addons'

// // Little helpers ...

// class App extends React.Component {
//   render () {
//     return (
//       <Parallax ref={ref => (this.parallax = ref)} pages={3}>
//         <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
//         <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

//         {/* <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} /> */}

//         <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }} />

//         <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }} />

//         <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }} />

//         <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }} />

//         <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }} />

//         <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }} />

//         <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }} />

//         <ParallaxLayer
//           offset={2}
//           speed={-0.3}
//           style={{
//             backgroundSize: '80%',
//             backgroundPosition: 'center'
//             // backgroundImage: url('clients', true)
//           }}
//         />

//         <ParallaxLayer
//           offset={0}
//           speed={0.1}
//           onClick={() => this.parallax.scrollTo(1)}
//           style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//         />

//         <ParallaxLayer
//           offset={1}
//           speed={0.1}
//           onClick={() => this.parallax.scrollTo(2)}
//           style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//         />

//         <ParallaxLayer
//           offset={2}
//           speed={-0}
//           style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//           onClick={() => this.parallax.scrollTo(0)}
//         />
//       </Parallax>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'))
