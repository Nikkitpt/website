
import {ImageWithText} from './ImageWithText';
import Grid from '@mui/material/Unstable_Grid2'
import { Container} from '@mui/material';



export function About() {
  const containerStyle = {
    // display: 'flex',
    // flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: '#282c34',
    overflow: 'hidden',
    paddingBottom: "0px",
    paddingLeft: "200px",

  };

  return (
    <Container sx={containerStyle}>
      <Grid container spacing={2}>
        <ImageWithText/>
        <Grid xs={6} sx={containerStyle}>
          <h2>Integrations and Analytics</h2>
          <p>I plan and implement custom third-party integrations to deliver comprehensive analytics and simplify report sharing.</p>
          <h2>Data Migration</h2>
          <p>I plan and implement custom third-party integrations to deliver comprehensive analytics and simplify report sharing.</p>
          <h2>API Development</h2>
          <p>Empowering all-scale startups with custom web experiences that are memorable and drive success. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape.</p>
        </Grid>
      </Grid>
    </Container>
)
}   

{/* // API Development
// Empowering all-scale startups with custom web experiences that are memorable and drive success. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape.
// Data Migration
// I plan and implement custom third-party integrations to deliver comprehensive analytics and simplify report sharing.
// Integrations and Analytics
// I plan and implement custom third-party integrations to deliver comprehensive analytics and simplify report sharing. */}