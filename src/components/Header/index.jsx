import React from 'react';
import { HeaderWrapper, Logo, HeaderDiv, HeaderContent, SearchWrapper, SearchInput, SearchIcon } from './styles';
import logo from '../../assets/impar-logo.png';

const Header = ({ onSearch }) => {
  return (
    <HeaderContent>
      <HeaderWrapper>
        <Logo src={logo} />
      </HeaderWrapper>
      <HeaderDiv>
        <SearchWrapper>
          <SearchInput
            type="text"
            placeholder="Digite aqui sua busca..."
            onChange={onSearch}
          />
          <SearchIcon stroke={2} /> {/* Ícone de busca dentro do input */}
        </SearchWrapper>
      </HeaderDiv>
    </HeaderContent>
  );
};

export default Header;
