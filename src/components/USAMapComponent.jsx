import React from 'react';
import usMapSvg from '../assets/us-map.svg';
import { useNavigate } from 'react-router-dom';
import GAStateUniversitiespage from '../pages/StateUniversitiesPages/GAStateUniversitiesPage';
import '../App.css';


function USAMapComponent() {
  const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
  const nav = useNavigate();
  const mapHandler = (state) => {
    console.log(`Clicked on state: ${state}`);
    
    if (state === 'GA') {
      nav('/GAStateUniversitiesPage'); // Navigate to GAStateUniversitiesPage
    } else {
      nav(`/state/${state}`); // Navigate to dynamic state page
    }
    // Add logic to handle state click here
  };
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <img src={usMapSvg} alt="US Map" />
      </div>
      <div style={{ flex: 1 }}>
        <h2>List of States (Only GA is available for now)</h2>
        <ul>
          {states.map(state => (
            <li key={state} onClick={() => mapHandler(state)} className="state" style={{ cursor: 'pointer' }}>
              {state}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default USAMapComponent;