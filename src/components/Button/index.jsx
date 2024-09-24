import React from 'react';
import { ButtonDiv, StyledButton, ButtonIcon } from './styles';
import { IconTrash, IconPencil } from '@tabler/icons-react';


const Button = ({type, onClick, children }) => {
  return (
    <StyledButton type={type}  onClick={onClick}>
      <ButtonDiv>
        <ButtonIcon type={type}>
          {type === 'delete' && <IconTrash stroke={2} />}
          {type === 'edit' && <IconPencil stroke={2} />}
        </ButtonIcon>
          
      </ButtonDiv>
      
      <ButtonDiv>
          {children}
      </ButtonDiv>
      
    </StyledButton>
  );
};

export default Button;
