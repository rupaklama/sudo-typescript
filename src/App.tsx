import React from 'react';
import { Card, Content, Grid, Title } from './components';

const App: React.FC = () => {
  return (
    <Content>
      <Title>Sudoku App</Title>
      <Card>
        <Grid />
      </Card>
    </Content>
  );
}

export default App;
