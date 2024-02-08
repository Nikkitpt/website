import React from 'react';  

export function Projects() {
      const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flex: '1',
    width: '100%',
    paddingBottom: "20px",
  };
    const headerStyle = {
        color: '#282c34',
        fontSize: "30px",
        paddingLeft: "200px",
        paddingRight: "200px",
        margin: "0px",
        // textDecoration: 'underline',

    }

    return(
        <div> 
            <div style = {headerStyle}>
                <h1 style = {{ borderBottom: '6mm ridge #282c34' }}>Projects</h1>
                <p style = {{ fontSize: '20px' }}>Unfortunately, I am unable to share the professional projects I have worked on - but im not gonna leave you empty handed! Here are a few links to fun projects I've put together to demonstate my skillset. If you like what you see, please email me at ndavis213@gmail.com.</p>
            </div>
            <div style={contentContainerStyle}>
                <div  style={{ paddingLeft: '200px',flex: '1'}}>
                <h2><a href="https://github.com/Nikkitpt/todo_pomodoro">Pomodoro Timer and Todo List</a></h2>
                <p style={{ paddingBottom: '200px',flex: '1'}}>Stack: Django, React, Bootstrap</p>
                </div>
                <div style={{ paddingRight: '200px',flex: '1',}}>
                <h2><a href="https://github.com/Nikkitpt/AI-Chatbot">AI Chatbot</a></h2>
                <p>Stack: Python and Chatterbot</p>
                </div>
            </div>
        </div>
    );
} 
