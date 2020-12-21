import React, { FC } from 'react'
import { Container } from './styles';

// interface to describe props structure
interface Props {
  colIndex: number;
  rowIndex: number;
}

const Block: FC<Props> = ({ colIndex, rowIndex }): JSX.Element => {
  return (
    <Container>
      {rowIndex}{colIndex}
    </Container>
  )
}

export default Block;
