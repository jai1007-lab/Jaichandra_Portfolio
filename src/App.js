import React from 'react';
import './Home.css'; // Import the CSS file
// import '../Header/Header.js'
import Projects from '../Projects/Projects'
import About from '../About/About'

import Contact from '../Contact/Contact';

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

    <Contact />
    </div>
  );
};

export default Home;
