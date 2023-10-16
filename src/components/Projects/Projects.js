import React, { useState } from 'react';
import './Projects.css'; // Import the CSS file

const projectsData = {
  webApplications: [
    {
      title: 'SoilMate : Tailored Crop Guidance for Indian Farming',
      description: 'Developed a Spring Boot-based website to empower Indian farmers in choosing the most suitable crops for their farmlands, considering critical factors such as soil type, past crop history, water availability, and more. By connecting farmers with knowledgeable professionals in farming and cultivation, the platform facilitates personalized crop recommendations, ultimately aiming to optimize agricultural productivity and financial returns.',
      image: '/SM.png',
      // image: '/BT.png',
    },
    {
      title: 'NutriHub: Your Dynamic Nutrition Companion',
      description: 'Built a nutrition management application using React and MongoDB that provides real-time, personalized nutrient profiles which adapt based on individual attributes and activities. NutriHub recommends optimal foods, specifying quantities and alternatives when specific dietary restrictions or preferences are involved. The application boasts a range of essential features, including personalized recipe suggestions, enabling community interaction, customizable nutrient goals, and even a barcode scanner for effortless food data entry.',
      image : '/NH.png'
    },
    {
      title: 'Student Profile & Results Management System',
      description: 'Developed a comprehensive Student Profile Management System using HTML, CSS, and JavaScript. This system efficiently stores and manages student information, academic records, extracurricular activities, and results in a database. Implemented an intuitive user interface for easy navigation, data input, and result viewing. Additionally, incorporated features such as search functionality and data visualization, further improving the user experience.',
      image: '/SRM.png',
    }
    // Add more web application projects as needed
  ],
  machineLearning: [
    {
      title: 'Brain tumor detection using K-means and morphological operations',
      description: 'Developed an innovative brain tumor detection framework using clustering, thresholding, and morphological operations to distinguish malignant brain tissue from healthy brain tissue in brain MRI scans. This project aims at assisting physicians in early tumor detection, which could potentially save a victim’s life.Having been accepted and presented at the 3rd International Conference on Data Analytics and Management (ICDAM-22), the research findings were acknowledged among the top 20% of papers at ICDAM-22 for their high standard. The research was subsequently published in Springer Lecture Notes on Networks and Systems',
      image: '/BT.png',
    },
    {
      title: 'CancerSight : CT scan-Driven Lung Cancer Detection Application',
      description: 'Developed an application using CT scans for lung cancer diagnosis, utilizing techniques such as OTSUs Thresholding, Segmentation, and Morphological Operations to extract potential lung malignancies.The primary objective of the project was to aid medical professionals in the early identification of lung cancer, aiming to significantly enhance patient survival rates through timely detection',
      image : '/LC.png'
    },
    { title: 'Predictive Modeling of Patient Readmissions.',
      description: 'Employed logistic regression, decision trees, and random forests to build a predictive model for patient readmissions, utilizing extensive healthcare data. The projects aim was to enhance healthcare outcomes by identifying factors contributing to readmissions, allowing for proactive interventions and resource optimization. Utilized feature selection techniques like Recursive Feature Elimination, LASSO Regression and fine-tuned models to achieve optimal predictive performance, aiding healthcare providers in minimizing patient readmissions and improving overall patient care.',
      image : 'PR.png',
    }
    // Add more machine learning projects as needed
  ],
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-title">Stuff I Built</h2>
      <div className="project-categories">
        <div
          className={`project-category ${activeCategory === 'webApplications' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('webApplications')}
        >
          Web Applications
        </div>
        <div
          className={`project-category ${activeCategory === 'machineLearning' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('machineLearning')}
        >
          Machine Learning
        </div>
      </div>
      {activeCategory && (
        <>
          {/* <h2 className="projects-title">Stuff I Built</h2> */}
          {projectsData[activeCategory].map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </section>
  );
};

export default Projects;