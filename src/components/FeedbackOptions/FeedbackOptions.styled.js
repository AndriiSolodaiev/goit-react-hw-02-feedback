import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 10px;
  transition: transform 250ms ease;
  :hover {
    transform: scale(1.2);
  }
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
