// src/App.jsx
import React from 'react';
import { useRoutes } from 'react-router-dom'
import CreateStudent from '../CreateStudent'
import EditStudent from '../EditStudent'
import ReadStudent from '../ReadStudent'
import { Link } from 'react-router-dom'
import './GAStudent.css'


function GAStudent() {
  
  const descr = 'He is a verry good student'
  const descr2 = 'She is curious and hardworking. She is a great student.'
  const descr3 = 'He has a potiential to be a great actor. He is a good student.'
  const descr4 = 'He is a little silent but he is a good student.'
  
  const posts = [
      {'id':'1', 
      'name': 'Harry Potter',
      'major':'Magic Science', 
      'description': descr},
      {'id':'2', 
      'name': 'Hermione Granger',
      'major':'Biochemistry', 
      'description':descr2},
      {'id':'3', 
      'name': 'Westley Snipes',
      'major':'Acting 🎭', 
      'description':descr3},
      {'id':'4', 
      'name': 'Severus Snape',
      'major':'Chemistry', 
      'description':descr4},
  ]
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadStudent data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditStudent data={posts} />
    },
    {
      path:"/GAStudent/new",
      element: <CreateStudent />
    }
  ]);

  return ( 

    <div className="Main">

      <div className="header">
        <h1>Georgia State University Student Page</h1>
        <Link to="/"><button className="headerBtn"> Back to Map 🔍  </button></Link>
        <Link to="/GAStudent/new"><button className="headerBtn"> Add Student 🏆 </button></Link>
      </div>
        {element}
    </div>

  );
}

export default GAStudent;