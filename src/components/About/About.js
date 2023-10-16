import React from 'react';
import './About.css'; // Import the CSS file
import '../Stles.css'

const About = () => {
  return (
    <section id='about' className='about-container'>
  <p style={{ fontSize: '1.5rem', margin: '0.5' }}>Hi, my name is</p>
  <p style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0' }}>Jaichandra</p>
  <p style={{ fontSize: '2.0rem', margin: '0.3' }}>I build Web Apps and Machine Learning models for a living.</p>
</section>
  );
};

export default About;
