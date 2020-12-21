import styled from 'styled-components';

export const Content = styled.div`
  background: '#282c34';
  max-width: 500px;
  display: flex;
  // flex-1 to allow a flex item to grow and shrink as needed to take available space
  // So flex: 1; is the same as saying flex-grow: 1;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;
