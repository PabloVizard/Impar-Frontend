import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Muli', sans-serif; 
  font-weight: 300;

  background-color: #FFFFFF;
  box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.15);
  opacity: 0.48;
  color: #263238;
  border-radius: 0px 0px 8px 8px;
  border: none;
  width: 100%;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;


  &:focus {
    outline: none; 
  }

  ${(props) =>
    props.type === 'delete' &&
    css`
      &:hover {
        color: #DC2F2F;
        opacity: 1;
      }
    `}

  ${(props) =>
    props.type === 'edit' &&
    css`
      &:hover {
        color: #E76316;
        opacity: 1;
      }
    `}

    ${(props) =>
    props.type === 'default' &&
    css`
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
      background-color: #E76316;
      color: #fff;
      opacity: 1;
      font-size : 18px;
      height: 48px;
      width: 173px;
      border-radius: 8px;

      &:hover {
        background-color: #d85c0f;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
      }
    `}

    ${(props) =>
    props.type === 'default-outline' &&
    css`
      height: 48px;
      width: 173px;
      border-radius: 8px;
      background-color: #FFFFFF;
      color: #E76316; 
      border: 2px solid #E76316;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
      font-size : 18px;
      opacity: 1;

      &:hover {
        background-color: #E76316;
        color: #FFFFFF;
        border-color: #E76316;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
        opacity: 1;
        font-size : 18px;
      }
    `}

    ${(props) =>
    props.type === 'confirm' &&
    css`
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
      background-color: #DB2525;
      color: #fff;
      opacity: 1;
      font-size : 18px;
      height: 48px;
      width: 173px;
      border-radius: 8px;

      &:hover {
        background-color: #DB2525;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
      }
    `}

    ${(props) =>
    props.type === 'cancel-outline' &&
    css`
      height: 48px;
      width: 173px;
      border-radius: 8px;
      background-color: #FFFFFF;
      color: #DB2525; 
      border: 2px solid #DB2525;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
      font-size : 18px;
      opacity: 1;

      &:hover {
        background-color: #DB2525;
        color: #FFFFFF;
        border-color: #DB2525;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
        opacity: 1;
        font-size : 18px;
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