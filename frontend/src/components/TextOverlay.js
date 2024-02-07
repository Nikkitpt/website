import React from 'react';

function TextOverlay() {


    const containerStyle = {
        position: 'relative',
        width: '300px',
        height: '200px',
    };
    
    const div1Style = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
    };
    
    const div2Style = {
        position: 'absolute',
        top: '50%',
        left: '90%',
        transform: 'translate(0%, 0%)',
        zIndex: 3,
        padding: '10px',
        backgroundColor: 'rgba(0, 0, 255, 0.7)',
        color: 'white',
    };
    
    return (
        <div style={containerStyle}>
        <div style={div1Style}></div>
        <div style={div2Style}>
            <p>Overlayed Text</p>
        </div>
        </div>
    );
    }
    export default TextOverlay;