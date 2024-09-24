import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 234px;
  height: 267px;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: white;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #E4E4E4;
`;

export const CardImageContend = styled.div`
margin-top: 28px;

`


export const CardContent = styled.div`
  margin: 12px 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 180px;
  border-top: 1px solid #F0EFF0;
`;

export const CardTitle = styled.text`
  
  font-size: 16x;
  color: #263238;
  opacity: 1;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: center;
  height: 43px; 
  width: 100%; 
`;