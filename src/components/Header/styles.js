import styled from 'styled-components';
import fundoBusca from '../../assets/fundo-busca.png';
import { IconSearch } from '@tabler/icons-react';

export const HeaderContent = styled.div`
  height: auto;
`

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: transparent linear-gradient(272deg, #AE276F 0%, #5F1478 100%) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.29);
  opacity: 1;
`;

export const SearchWrapper = styled.div`
  top: 70px;
  position: relative;
  width: 70%;
  
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 40px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 24px;
  height: 75px;
`;



export const SearchIcon = styled(IconSearch)`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  height: 50px;
  width: 50px;
  cursor: pointer;
  color: #aaa;
`;
export const Logo = styled.img`
  height: 40px;
`;

export const HeaderDiv = styled.div`
top: 50px;
  width: 100%;
  min-height: 300px; /* Mínimo de 300px */
  background-image: url(${fundoBusca});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column; /* Para empilhar os itens verticalmente */
`;
