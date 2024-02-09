
import {ImageWithText} from './ImageWithText';
// import Grid from '@mui/material/Unstable_Grid2'
import { Grid } from '@mui/material'


export function About() {

  return (
    <Grid sx={{
      backgroundColor: '#282c34',
      display: 'flex',
      color: '#f6e9d9',
      flexDirection: 'column',
      borderRadius: 1,
      alignItems: 'center',
      px: 4,
    }}>
      <h1> About Me</h1>
        {/* <ImageWithText/> */}

    
        <Grid container sx={{
          display: 'flex',
          flexFlow: 'column'
        }}>
          <Grid xs={12}>
            <h2>Integrations and Analytics</h2>
          </Grid>

          <Grid md={6} xs={12}>
            <p>I plan and implement custom third-party integrations to deliver comprehensive analytics and simplify report sharing.</p>
          </Grid>
          <Grid xs={12}>
            <h2>Data Migration</h2>
          </Grid>
          <Grid md={6} xs={12}>
            <p>I plan and implement custom third-party integrations to deliver comprehensive analytics and simplify report sharing.</p>
          </Grid>
          <Grid xs={12}>
            <h2>API Development</h2>
          </Grid>
          <Grid md={6} xs={12}>
            <p>Empowering all-scale startups with custom web experiences that are memorable and drive success. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape.</p>
          </Grid>
        </Grid>

    </Grid>
)
}   

{/* // API Development
// Empowering all-scale startups with custom web experiences that are memorable and drive success. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape.
// Data Migration
// I plan and implement custom third-party integrations to deliver comprehensive analytics and simplify report sharing.
// Integrations and Analytics
// I plan and implement custom third-party integrations to deliver comprehensive analytics and simplify report sharing. */}
