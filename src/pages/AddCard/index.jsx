import React, { useState, useEffect } from 'react';
import {  ModalWrapper,  ModalContent,  ModalBackground,  CardTitle,  FileInputWrapper,  FileButton,  SpanFileName,  AddCardDivButton,  LineDiv} from './styles';
import Button from '../../components/Button';
import { registerItem, updateItem } from '../../services/card-service';
import Swal from 'sweetalert2';

const ModalCard = ({ isOpen, onClose, cardToEdit }) => {
  const [fileName, setFileName] = useState('Nenhum arquivo selecionado');
  const [cardTitle, setCardTitle] = useState('');
  const [status, setStatus] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      resetForm(); 
      if (cardToEdit) {
        setCardTitle(cardToEdit.name);
        setStatus(cardToEdit.status.toString());
        if (cardToEdit.photo) {
          setFileName('Image');
          setFile({ base64: cardToEdit.photo.base64 });
        }
      } else {
        resetForm();
      }
    }
  }, [isOpen, cardToEdit]);

  const resetForm = () => {
    setError('');
    setCardTitle('');
    setStatus('');
    setFileName('Nenhum arquivo selecionado');
    setFile(null);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile({
          name: selectedFile.name,
          base64: reader.result,
        });
        setFileName(selectedFile.name);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      resetFileSelection();
    }
  };

  const resetFileSelection = () => {
    setFileName('Nenhum arquivo selecionado');
    setFile(null);
  };

  const handleSubmit = async () => {
    setError('');
    if (!cardTitle || !status || !file) {
      setError('Todos os campos são obrigatórios');
      return;
    }
  
    const data = {
      id: cardToEdit ? cardToEdit.id : 0,
      photoId: cardToEdit ? (cardToEdit.photo ? cardToEdit.photo.id : 0) : 0,
      name: cardTitle,
      status: Number(status),
      photo: {
        id: cardToEdit ? (cardToEdit.photo ? cardToEdit.photo.id : 0) : 0,
        base64: file.base64,
      },
    };
  
    try {
      if (cardToEdit) {
        await updateItem(data);
        Swal.fire({
          icon: 'success',
          title: 'Card atualizado com sucesso!',
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        await registerItem(data);
        Swal.fire({
          icon: 'success',
          title: 'Card cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 2000,
        });
      }
      onClose();
    } catch (error) {
      setError('Erro ao salvar o card, tente novamente');
    }
  };
  

  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalBackground onClick={onClose} />
      <ModalContent>
        <CardTitle>
          <img src="src/assets/icone-criar.png" alt="Ícone" />
          <h2>{cardToEdit ? 'Editar card' : 'Criar card'}</h2>
        </CardTitle>

        {error && <div style={{ color: 'red' }}>{error}</div>}

        <div style={{ fontSize: '14px', paddingTop: '25px', fontWeight: 'bold'  }}>DIGITE UM NOME PARA O CARD *</div>
        <input
          type="text"
          placeholder="Digite o título"
          style={{ height: '60px' }}
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
        />

        <div style={{ fontSize: '14px', paddingTop: '50px', fontWeight: 'bold' }}>SELECIONE UM STATUS PARA O CARD *</div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{
            width: '100%',
            padding: '20px',
            marginTop: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            fontSize: '16px',
            height: '60px',
          }}
        >
          <option value="">Selecione</option>
          <option value="1">A fazer</option>
          <option value="2">Em Progresso</option>
          <option value="3">Feito</option>
          <option value="4">Cancelado</option>
        </select>

        <div style={{ fontSize: '14px', paddingTop: '50px', fontWeight: 'bold'  }}>INCLUA UMA IMAGEM PARA APARECER NO CARD *</div>
        <FileInputWrapper>
          <SpanFileName>{fileName}</SpanFileName>
          <FileButton htmlFor="file-upload">Escolher Arquivo</FileButton>
          <input
            id="file-upload"
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </FileInputWrapper>

        <LineDiv />
        <AddCardDivButton>
          <Button type="default" onClick={handleSubmit}>
            {cardToEdit ? 'Atualizar card' : 'Criar card'}
          </Button>
        </AddCardDivButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalCard;
