import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 10px;
  transition: transform 250ms ease;
  :hover {
    background-color: ${({ name }) => {
      switch (name) {
        case 'good':
          return 'green';

        case 'neutral':
          return 'blue';

        case 'bad':
          return 'red';
      }
    }};
    transform: scale(1.2);
    color: white;
  }
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
