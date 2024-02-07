import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageWithText from './ImageWithText';



export default function About() {
  const containerStyle = {
    // display: 'flex',
    // flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: '#282c34',
    overflow: 'hidden',
    paddingBottom: "0px",

  };

  const headerStyle = {
    color: '#f6e9d9',
    fontSize: "30px",
    paddingLeft: "200px",
    paddingRight: "200px",
    margin: "0px",
    // textDecoration: 'underline',

  };

  return (
    <div style={containerStyle}>
        <div style={headerStyle}>
        <h1 style = {{ borderBottom: '6mm ridge #f6e9d9' }}>About Me</h1>
      </div>
      <div>
        <ImageWithText/>
      </div>
      <div style={headerStyle}>
        <h1 style = {{ borderBottom: '6mm ridge #f6e9d9' }}>What I Do</h1>
      </div>
      <div> 
        <Accordion sx={{ backgroundColor: '#282c34', color: '#f6e9d9', paddingLeft: "200px",paddingRight: "200px", textAlign:'center'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: '#f6e9d9' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={{textDecoration: 'underline',}}
                >
                <h3>Integrations and Analytics</h3>
            </AccordionSummary>
            <AccordionDetails style={{ color: '#f6e9d9'}}>
            I plan and implement custom third-party integrations to deliver comprehensive analytics and simplify report sharing.
            </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: '#282c34', color: '#f6e9d9', paddingLeft: "200px",paddingRight: "200px",textAlign:'center' }}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#f6e9d9' }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{textDecoration: 'underline'}}
        >
            <h3>Data Migration</h3>
        </AccordionSummary>
        <AccordionDetails style={{ color: '#f6e9d9' }}>
        I engineer and deploy APIs to enhance features and functionality in third-party clients. Collaborating closely with internal teams and external stakeholders, ensuring seamless delivery of migrations and API integrations.
        </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: '#282c34', color: '#f6e9d9', paddingLeft: "200px", paddingRight: "200px",textAlign:'center' }}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#f6e9d9' }}/>}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{textDecoration: 'underline'}}
        >
            <h3>API Development</h3>
        </AccordionSummary>
        <AccordionDetails style={{ color: '#f6e9d9' }}>
        Empowering all-scale startups with custom web experiences that are memorable and drive success. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape.
        </AccordionDetails>
        </Accordion>
          </div>
      
      {/* <div style={contentContainerStyle}>

        <div style={contentStyle}>
          <h2>What I Do</h2>
          <p>Here's my two to three sentence thing about how I'm a badass</p>
        </div>

        <div style={{ flex: '1' }}>
          <Accordion sx={{ backgroundColor: '#282c34', color: '#f6e9d9' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3>Custom Integrations</h3>
            </AccordionSummary>
            <AccordionDetails style={{ color: '#f6e9d9' }}>
              Why I'm rad
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: '#282c34', color: '#f6e9d9' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3>Anotha one</h3>
            </AccordionSummary>
            <AccordionDetails style={{ color: '#f6e9d9' }}>
              Why I'm rad
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: '#282c34', color: '#f6e9d9' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3>And Anotha one</h3>
            </AccordionSummary>
            <AccordionDetails style={{ color: '#f6e9d9' }}>
              Why I'm rad
            </AccordionDetails>
          </Accordion>
        </div> */}
      {/* </div> */}
    </div>
  );
}
