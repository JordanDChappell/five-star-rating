import React from 'react';
import styled from 'styled-components';

/* Components */
import Stars from './Components/Stars/Stars';

/* Style */
import './App.css';

/* Styled Components */
const Heading = styled.h2`
  font-weight: bold;
`;

const App = () => (
  <div className="app">
    <header>
      <Heading>Rate my website!</Heading>
      <Stars />
    </header>
  </div>
);

export default App;
