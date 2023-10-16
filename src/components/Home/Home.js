import React from 'react';
import './Home.css'; // Import the CSS file
// import '../Header/Header.js'
import '../Projects/Projects'
import '../About/About'
// import '../Contact/Contact.css'

import { Box, Grid,Container, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Projects from '../Projects/Projects';
import About from '../About/About';


const contactStyles = {
  fontFamily: 'Segoe UI, sans-serif', // Set the font to Segoe UI
};

const titleStyles = {
  fontSize: '1.8rem',
  color: 'rgba(51, 51, 51, 0.9)', // Adjust the transparency here
  marginBottom: '5px', // Add a margin for spacing
};

const subTitleStyles = {
  fontSize: '1rem',
  color: 'rgba(51, 51, 51, 0.5)', // Full opacity for subtitle
  marginBottom: '5px', // Add a margin for spacing
};

const infoStyles = {
  fontSize: '1rem',
  color: 'rgba(51, 51, 51, 1)', // Full opacity for info
};

// const projects = [
//   {
//     title: 'Project 1',
//     description: 'Description of Project 1.',
//   },
//   {
//     title: 'Project 2',
//     description: 'Description of Project 2.',
//   },
//   // Add more projects as needed
// ];

const Home = () => {
  return (
    <div> 

    <About />

    <Projects />

    <hr></hr>

    <Container maxWidth="lg" id = "contact"className="contact-container">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography variant="h4" style={{ ...contactStyles, ...titleStyles }}>
              Jaichandra
            </Typography>
            <Typography variant="subtitle1" style={{ ...contactStyles, ...subTitleStyles }}>
              Software Engineer
            </Typography>
            <Typography variant="body2" style={{ ...contactStyles, ...infoStyles }}>
             +1 704-780-3295
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="flex-end">
            <Link href="https://www.linkedin.com/in/jaichandrajadhav/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon style={{ color: 'black', fontSize: 40, marginRight: '15px' }} />
            </Link>
            <Link href="https://github.com/jai1007-lab" target="_blank" rel="noopener noreferrer">
              <GitHubIcon style={{ color: 'black', fontSize: 40, marginRight: '15px' }} />
            </Link>
            <Link href="mailto:jaichandra0710@gmail.com">
              <EmailIcon style={{ color: 'black', fontSize:40 }} />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default Home;
