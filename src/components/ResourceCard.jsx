import React from 'react';
import './ResourceCard.css';
import { Link } from 'react-router-dom';

const ResourceCard = ({ title, description, route, img }) => {
  return (
    <div className="resource-card">
      <a href={'https://www.gsu.edu/'}> 
        <h2>{title}</h2>
      </a>
      <img src={img} alt={title} />
      <p>{description}</p>
      <Link to={route} className="button">Student Official Webpage</Link>  
    </div>
  );
}

export default ResourceCard;