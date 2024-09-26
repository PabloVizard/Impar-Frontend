import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
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
`;

export const ModalContent = styled.div`
  position: relative;
  width: 440px;
  height: 435px;
  z-index: 1001;
  background: #fff;
  padding: 40px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -30px;
  right: -20px;
  background: #E76316;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;


export const ConfirmationMessage = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;

    img {
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
    }
`;

export const ConfirmationTextDiv = styled.div`
    padding-top: 30px;
    h2 {
        font-size: 32px;
        margin: 0;
        color: #DB2525;
    }

    p {
        font-size: 12px;
        color: #454545;
        font-weight: bold;
    }`

export const LineConfirmDiv = styled.div`
  padding-top: 10px;
  border-bottom: 1px solid #E4E4E4;
`

export const ActionButtons = styled.div`
    
    position: absolute;
    bottom: 20px;
    left: 40px;
    right: 40px; 
    display: flex;
    justify-content: space-between; 
`;

export const IconWrapper = styled.div`
  margin-bottom: 20px; 
  display: flex; 
  justify-content: center;
  align-items: center; 
  background: #db25250f; 
  border: 6px solid #e4e4e4;
  width: 100%; 
  max-width: 159px;
  height: 159px; 
  margin: 0 auto; 
  border-radius: 50%;
  opacity: 1;
  color: #DB2525;
`;