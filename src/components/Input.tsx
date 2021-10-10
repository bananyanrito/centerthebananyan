import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid palevioletred;
  &:focus {
    outline: none;
  }
  width: 100%;
  padding: 0.5em;
  font-family: 'Roboto', sans-serif;
  color: palevioletred;
  font-size: 1em;
`;
