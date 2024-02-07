import './App.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import React, { useEffect} from 'react';
import axios from 'axios';
import { Container} from '@mui/material';
// import ImageWithText from './components/ImageWithText';
// import TextOverlay from './components/TextOverlay';


function App() {

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <Container sx={{ backgroundColor: '#f6e9d9'}} disableGutters maxWidth={false}>
      <header className="App-header">
        <Hero/>
      </header>
      <About/>
      <Projects/>
    </Container>
  );

}


export default App;