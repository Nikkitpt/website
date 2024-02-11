import React from 'react';
import { Grid, Card, CardContent, CardMedia } from '@mui/material';

export function About() {

  return (
  

    <Grid container sx={{
      backgroundColor: '#282c34',
      display: 'flex',
      color: '#f6e9d9',
      flexDirection: 'row',  
      borderRadius: 3,
      alignItems: 'center',
      px: 4,
    }}>

      <Grid item xs={12} md={6} sx={{
        display: 'flex',
        flexFlow: 'column'
      }}>
        <h1>What I Do</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>Integrations and Analytics</h2>
          </Grid>
          <Grid item xs={12}>
            <p>I plan and implement custom third-party integrations to deliver comprehensive analytics and simplify report sharing.</p>
          </Grid>
          <Grid item xs={12}>
            <h2>Data Migration</h2>
          </Grid>
          <Grid item xs={12}>
            <p>I engineer and deploy API's to enhance feature and functionality in third-party clients. Collaborating closely with internal teams and external stakeholders, ensuring seamless delivery of migrations and API integrations.</p>
          </Grid>
          <Grid item xs={12}>
            <h2>API Development</h2>
          </Grid>
          <Grid item xs={12}>
            <p>Empowering all-scale startups with custom web experiences that are memorable and drive success. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape.</p>
          </Grid>
        </Grid>
      </Grid>


      <Grid item xs={12} md={6}>
        <Card sx={{ height: '1-0%' }}>
          <CardMedia
            component="img"
            alt="Portrait of Nicole Davis"
            height="100%"
            image="https://live.staticflickr.com/65535/53507248420_465af443fc_o.jpg" 
          />
        </Card>
      </Grid>
    </Grid>
  );
}

// Empowering all-scale startups with custom web experiences that are memorable and drive success. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape.