import './App.css';
import Hero from "./components/Hero";
import About from "./components/About";
import React, { useEffect} from 'react';
import axios from 'axios';
import { Container} from '@mui/material';



function App() {

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <Container sx={{ backgroundColor: '#282c34'}} disableGutters maxWidth={false}>
      <header className="App-header">
        <Hero/>
      </header>
      <About/>
    </Container>
  );

}


export default App;