import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #FFFFFF;
  box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.15);
  opacity: 0.48;
  color: #263238;
  border-radius: 0px 0px 8px 8px;
  border: none;
  width: 100%;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;


  &:focus {
    outline: none; 
  }

  ${(props) =>
    props.type === 'delete' &&
    css`
      &:hover {
        color: #DC2F2F;
        opacity: 1;/
      }
    `}

  ${(props) =>
    props.type === 'edit' &&
    css`
      &:hover {
        color: #E76316;
        opacity: 1;/
      }
    `}
`;

export const ButtonDiv = styled.div`
  justify-content: center;
  align-items: center;
  padding: 5px;
`

export const ButtonIcon = styled.div`
   ${(props) =>
    props.type === 'delete' &&
    css`
      color: #DC2F2F;
      opacity: 1; 
    `}

  ${(props) =>
    props.type === 'edit' &&
    css`
      color: #E76316;
      opacity: 1; 
    `}
`