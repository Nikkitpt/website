import React from 'react';  
import { Grid } from '@mui/material';

export function Projects() {

    return(
        <Grid sx={{
            backgroundColor: '#f6e9d9',
            display: 'flex',
            color: '#282c34',
            flexDirection: 'column',
            borderRadius: 1,
            alignItems: 'left',
            px: 4,
        }}>
            <h1 sx={{ fontSize: '2rem', marginBottom: 2 }}>Projects</h1>

            <Grid xs={12}>
                <h2 sx={{ fontSize: '1.5rem', marginBottom: 2 }}>
                    Unfortunately, I am unable to share the professional projects I have worked on, but I'm not gonna leave you empty-handed! Here are a few links to fun projects I've put together to demonstrate my skillset. If you like what you see, please email me at ndavis213@gmail.com
                </h2>
            </Grid>

            <Grid container sx={{
                display: 'flex',
                flexFlow: 'row'
            }}>
                <Grid xs={6}>
                    <h2 sx={{ fontSize: '1.5rem', marginBottom: 1 }}>
                        <a href="https://github.com/Nikkitpt/todo_pomodoro">Pomodoro Timer and Todo List</a>
                    </h2>
                    <p sx={{ paddingBottom: '200px', flex: '1', fontSize: '1rem' }}>
                        Stack: Django, React, Bootstrap
                    </p>
                </Grid>

                <Grid xs={6}>
                    <h2 sx={{ fontSize: '1.5rem', marginBottom: 1 }}>
                        <a href="https://github.com/Nikkitpt/AI-Chatbot">AI Chatbot</a>
                    </h2>
                    <p sx={{ fontSize: '1rem' }}>
                        Stack: Python and Chatterbot
                    </p>
                </Grid>
            </Grid>
        </Grid>

       
    );
} 
