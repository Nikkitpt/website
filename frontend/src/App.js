import './App.css';
import {Hero} from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Grid } from '@mui/material';

const App = () => 
    <Grid container sx={{ 
      backgroundColor: '#f6e9d9',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Hero/>
      <About/>
    </Grid>

export default App;