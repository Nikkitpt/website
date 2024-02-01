import React, { useState } from 'react';
import { useScroll, animated } from '@react-spring/web'
import { useTrail, a } from '@react-spring/web';
import styles from '../styles.module.css'

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

export default function Hero() {
    const [open, set] = useState(true);
    return (
        <>
            <div className={styles.container} onClick={() => set((state) => !state)}>
                <Trail open={open}>
                    <span>Hello!</span>
                    <span>I'm</span>
                    <span>Nicole</span>
                    <span>Davis</span>
                </Trail>
            </div>
            <Scroll />
        </>
    );
}