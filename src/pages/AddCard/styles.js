import styled, { keyframes } from 'styled-components';

const backgroundSlideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  z-index: 999;
  animation: ${backgroundSlideIn} 0.2s ease-out;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 650px;
  height: 100%;
  background: #fff;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 45px;
  z-index: 1000;
  animation: ${slideIn} 0.2s ease-out;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  input[type="text"] {
    width: 100%;
    padding: 20px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    height: 60px;
  }

`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 46px;
    height: 46px;
    margin-right: 10px;
  }

  h2 {
    font-size: 32px;
    color: #5F1478;
    margin: 0;
  }
  padding-bottom: 25px;
  border-bottom: 1px solid #D4D4D4;
`;

export const LineDiv = styled.div`
  padding-top: 50px;
  border-bottom: 1px solid #D4D4D4;
`

export const AddCardDivButton = styled.div`
    padding-top: 25px;
    display: flex;
    justify-content: flex-end;
`

export const FileInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 10px;
  height: 60px;
  margin-top: 10px;
  width: 100%;
  position: relative; 
`;


export const FileButton = styled.label`
  position: absolute;
  right: 10px;
  width: 225px;
  height: 48px;
  padding: 12px;
  background-color: #FFFFFF;
  color: #E76316; 
  border: 2px solid #E76316;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  font-size : 18px;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  line-height: 18px;

  &:hover {
    background-color: #E76316;
    color: #FFFFFF;
    border-color: #E76316;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    opacity: 1;
    font-size : 18px;
  }
`;


export const SpanFileName = styled.span`
  flex-grow: 1;
  font-size: 16px;
  color: #757575;
  margin-left: 10px;
`;

