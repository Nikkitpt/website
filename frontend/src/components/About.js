import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageWithText from './ImageWithText';


export default function About() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#282c34',
    overflow: 'hidden',
  };

  const headerStyle = {
    color: '#f6e9d9',
    marginTop: 0,
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flex: '1',
    width: '100%',
  };

  const contentStyle = {
    flex: '1',
    padding: '10px',
    marginRight: '16px',
    color: '#f6e9d9',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1>About Me</h1>
        <ImageWithText/>
      </div>
      <div style={contentContainerStyle}>
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
          {/* Additional accordions go here */}
        </div>
      </div>
    </div>
  );
}
