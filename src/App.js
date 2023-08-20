import React from 'react';
import Timer from './Timer';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
`;

const App = () => {
  return (
    <AppContainer>
      <Timer />
    </AppContainer>
  );
};

export default App;

