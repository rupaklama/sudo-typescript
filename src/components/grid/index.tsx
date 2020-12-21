import React, { FC } from 'react';
import Block from './block';
import { Container, Row } from './styles';

// React.FC stands for React Functional Component
// component<P={}, S> - P is first arg, meaning Props which is empty object by default
//  & S is second arg, meaning State
// passing above Props interface as a first argument - P
const Grid: FC = () => {
  return (
    // randomly create a new array with length of 9 empty elements
    // will be rendering div below 9 times
    <Container>
      {  // _ first arg - not using it / don't care
        // React.Children.toArray is when we don't have a unique "key" prop
      React.Children.toArray([...Array(9)].map((_, rowIndex) => (
        <Row>
          {React.Children.toArray([...Array(9)].map((_, colIndex) => (
            <Block colIndex={colIndex} rowIndex={rowIndex}/>
          )))}
        </Row>
      )))}
    </Container>
  );
};

export default Grid;
