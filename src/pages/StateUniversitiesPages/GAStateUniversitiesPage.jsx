// src/pages/StateUniversitiesPage.jsx
import React from 'react';
import './GAUniversitiesPage.css';
import ResourceCard from '../../components/ResourceCard';
import GAStudent from '../StudentPage/GAStudent';


const GAStateUniversitiesPage = () => {
  const universityRoutes = {
    'Georgia State University': '/GAStudent',
    'Another University': '/AnotherStudentPage',
    // Add more universities and their corresponding routes
  };
  
  const resources = [

    { id: 1, title: 'Georgia State University', description: "Georgia State University (Georgia State, State, or GSU) is a public research university in Atlanta, Georgia.[14] Founded in 1913, it is one of the University System of Georgia's four research universities. It is also the largest institution of higher education by enrollment based in Georgia and one of the largest in the nation", route: '/GAStudent', image: 'https://belonging.gsu.edu/files/2020/08/20200325_MLB_Spring_Admissions_00802-1900-2.jpg' },
    { id: 2, title: 'Another University', description: 'Description of Another University', route: '/AnotherStudentPage' },
    { id: 3, title: 'Simplify', description: 'Application tool, fill out application forms with one click', route: '/GAStudent'},
    { id: 4, title: 'CodePath', description: ' An organization that provides technical training, guidance and a community to help people start their careers in the tech industry', route: '/GAStudent'},
    { id: 5, title: 'LeetCode', description: 'The best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.', route: '/GAStudent'},
    { id: 6, title: 'Coding Interview University', description: 'To-do list of study topics for becoming a software engineer', route: '/GAStudent' },
    { id: 7, title: 'Tech Interview Handbook', description: 'Software Engineer interviews: Everything you need to prepare', route: '/GAStudent'},
    { id: 8, title: 'Major League Hacking', description: 'The official collegiate hackathon league.', route: '/GAStudent'},
    { id: 9, title: 'DevPost', description: 'Participate in online virtual and in-person hackathons to build products, practice skills, learn technologies, win prizes, and grow your network.', route: '/GAStudent'},
    { id: 10, title: 'HackerRank', description: 'HackerRank is the market-leading coding test and interview solution for hiring developers. Start hiring at the pace of innovation!', route: '/GAStudent'},
    { id: 11, title: 'LinkedIn', description: 'The World Most Popular Job Searching Website', route: '/GAStudent' },
    { id: 12, title: 'r/csMajors', description: 'A reddit forum for CS majors, a lot of information, but be careful cuz people here can be really toxic', route: '/GAStudent'},

  ];

  return (
    <>
    <div>
      <h1>GA State Universities Page (Only Georgia State University is available for now)</h1>
    </div>
    <div className="UniversitiesContainer">
      <div className="resource-grid">
        {resources.map(resource => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            img={resource.image}
            description={resource.description}
            route={universityRoutes[resource.title]} // Set the route dynamically based on the university title
       
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default GAStateUniversitiesPage; // Ensure to export the component as default