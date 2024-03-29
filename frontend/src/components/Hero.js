import React, { useState } from 'react';
import { useScroll, animated } from '@react-spring/web'
import { useTrail, a } from '@react-spring/web';
import styles from '../styles.module.css'
import { Grid } from '@mui/material';

function Scroll() {
    const { scrollYProgress } = useScroll()
  
    return (
      <animated.div style={{ opacity: scrollYProgress, marginBottom :"250px", color: "black" }}>
        A backend developer propelling visions to reality
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
    <Grid>
    {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
        <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
    ))}
    </Grid>
);
};

export function Hero() {
    const [open, set] = useState(true);
    return (
        <Grid item className="App-header" style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Grid className={styles.container} onClick={() => set((state) => !state)}>
                <Trail open={open}>
                    <span>Hello!</span>
                    <span>I'm</span>
                    <span>Nicole</span>
                    <span>Davis</span>
                </Trail>
            </Grid>
            <Scroll />
        </Grid>
    );
}