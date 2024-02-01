import { Grid } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function About() {
    return(
    <Grid container spacing={8} style={{ marginTop: '16px' }}>
    {/* Items inside the Grid */}
        <Grid item xs={6}>
            <h2>What I Do </h2>
            <p>Here's my two to three sentence thing about how im a badass</p>
        </Grid>
        <Grid item xs={6}>
            <Accordion sx={{ backgroundColor: '#282c34', color: 'white'}} >
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            Custom Integrations
            </AccordionSummary>
            <AccordionDetails style={{ color: 'white' }}>
                Why im rad
            </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: '#282c34', color: 'white'}} >
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            >
            Something Else sick
            </AccordionSummary>
        <AccordionDetails style={{ color: 'white' }}>
            Why im rad
            </AccordionDetails>
        </Accordion>
        </Grid>
    </Grid>
    );
}