// src/App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import USAMapComponent from './components/USAMapComponent';
import Layout from './pages/Layout';
import { useNavigate } from 'react-router-dom';
import GAStateUniversitiesPage from './pages/StateUniversitiesPages/GAStateUniversitiesPage';
import './App.css';
import GAStudent from './pages/StudentPage/GAStudent';
import EditStudent from './pages/EditStudent';
import CreateStudent from './pages/CreateStudent';

const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<><h1>EGP Alumni Page</h1><USAMapComponent states={states} /></>} />
          <Route path="/state/:stateAbbreviation" element={<USAMapComponent states={states} />} />
          <Route path="/GAStateUniversitiesPage" element={<GAStateUniversitiesPage />} />          
        </Route>
        <Route path="/GAStudent/*" element={<GAStudent />} /> 
        <Route path="GAStudent/edit/:id" element={<EditStudent />} />
        <Route path="GAStudent/new" element={<CreateStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;