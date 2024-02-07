import React from 'react';
// import { useScroll, animated } from '@react-spring/web';

// function Scroll() {
//   const { scrollYProgress } = useScroll();

//   return (
//     <animated.div style={{ opacity: scrollYProgress, marginBottom: '250px', color: 'black' }}>
//       <ImageWithText />
//     </animated.div>
//   );
// }

function ImageWithText() {
  const containerStyle = {
    position: 'relative',
    margin: 'auto', // Center the container horizontally
    overflow: 'hidden',
    marginTop: "0px",
    paddingTop: "0px",
    marginBottom: "20px" // Hide overflow to clip text outside the container
  };

  const imageStyle = {
    width: '30%',
    display: 'block',
    margin: 'auto',
    paddingBottom: '50px',
    opacity: "0.5"
  };

  const textStyle = {
    position: 'absolute',
    top: '85%',
    left: '65%',
    transform: 'translate(-50%, -50%)', // Adjust to center the text vertically
    backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent background
    color: '#f6e9d9',
    padding: '10px',
    textAlign: 'justify',
  };

  return (
    <div style={containerStyle}>

      <img
        src="https://live.staticflickr.com/65535/53507248420_465af443fc_o.jpg"
        alt="sometext"
        style={imageStyle}
      />
      <div style={textStyle}>
        <h3>
        Empowering all-scale startups with custom web experiences that are memorable and drive success. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape.
        </h3>
      </div>
    </div>
  );
}

export default ImageWithText;

// export default function App{
// //   return <Scroll />;
// }