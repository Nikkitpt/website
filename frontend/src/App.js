import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Menu from "./Menu"

import { Container, Grid } from '@mui/material';
import { useTrail, a } from '@react-spring/web';
import styles from './styles.module.css'
import { useScroll, animated } from '@react-spring/web'

function Scroll() {
  const { scrollYProgress } = useScroll()

  return (
    <animated.div style={{ opacity: scrollYProgress, marginBottom :"250px" }}>
      A backend developer propelling startup visions to reality
    </animated.div>
  )
}


const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 100, tension: 3000, friction: 500 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};


function App() {
  const [open, set] = useState(true);
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <Container sx={{ backgroundColor: '#282c34'}} disableGutters maxWidth={false}>
      <header className="App-header">
        <div className={styles.container} onClick={() => set((state) => !state)}>
          <Trail open={open}>
            <span>Hello!</span>
            <span>I'm</span>
            <span>Nicole</span>
            <span>Davis</span>
          </Trail> 
          
        </div>
        <Scroll/>
        <Grid container spacing={8} style={{ marginTop: '16px' }}>
        {/* Items inside the Grid */}
          <Grid item xs={6}>
            <div>
              <h2>What I Do </h2>
              <p>Here's my two to three sentence thing about how im a badass</p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Menu />
          </Grid>
        </Grid>
      </header>

      <div>
        {getMessage.status === 200 ?
          <h3>{getMessage.data.message}</h3>
          :
        <h3>LOADING</h3>
        }
      </div>
    </Container>
  );

}


export default App;