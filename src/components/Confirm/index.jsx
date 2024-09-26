import React from 'react';
import {  ModalWrapper,  ModalContent,  ModalBackground,  CloseButton,  ConfirmationMessage,  ActionButtons,  LineConfirmDiv,  IconWrapper, ConfirmationTextDiv } from './styles';
import { IconTrash } from '@tabler/icons-react';
import Button from '../Button';
import { IconX } from '@tabler/icons-react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalBackground onClick={onClose} />
      <ModalContent>
        <CloseButton onClick={onClose}><IconX stroke={2} /></CloseButton>
        <ConfirmationMessage>
          <IconWrapper>
            <IconTrash stroke={1.5} size={80} />
          </IconWrapper>
            <ConfirmationTextDiv>
                <h2>Excluir</h2>
                <p>CERTEZA QUE DESEJA EXCLUIR?</p>
            </ConfirmationTextDiv>
        </ConfirmationMessage>

        <LineConfirmDiv />
        <ActionButtons>
          <Button type="confirm" onClick={onConfirm}>Excluir</Button>
          <Button type="cancel-outline" onClick={onClose} className="outline">Cancelar</Button>
        </ActionButtons>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ConfirmationModal;
