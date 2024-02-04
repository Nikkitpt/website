import React from 'react';

function ImageWithText() {

  const containerStyle = {
    position: 'relative',
    margin: 'auto', // Center the container horizontally
    overflow: 'hidden', // Hide overflow to clip text outside the container

  };

  const imageStyle = {
    width: '30%',
    display: 'block',
    margin: 'auto',
    paddingBottom : "100px"
  };

  const textStyle = {
    position: 'absolute',
    top: '80%',
    left: '65%', // Center the text horizontally over the image
    transform: 'translate(-50%, -50%)', // Adjust to center the text vertically
    backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent background
    color: '#f6e9d9',
    padding: '10px',
    textAlign: 'center',
  };


  return (
    <div style={containerStyle}>
      <img
        src="https://live.staticflickr.com/65535/53507248420_465af443fc_o.jpg"
        alt="sometext"
        style={imageStyle}
      />
      <div style={textStyle}>
        <p>Half on and half off text
        Half on and half off tex
        Half on and half off tex
        Half on and half off tex
        Half on and half off tex
        Half on and half off texHalf on and half off tex
        Half on and half off tex
        Half on and half off tex
        Half on and half off tex
        Half on and half off textttt
        </p>
      </div>
    </div>
  );
}

export default ImageWithText;
