import './App.css';
import {Hero} from "./components/Hero";
import { About } from "./components/About";
import {Projects} from "./components/Projects";
import { Container} from '@mui/material';

const App = () => 
    <Container sx={{ backgroundColor: '#f6e9d9'}} disableGutters maxWidth={false}>
      <div className="App-header">
        <Hero/>
      </div>
      <About/>
    </Container>

export default App;