import React from 'react';
import { CardWrapper, CardImage, CardContent, CardActions, CardTitle, CardImageContend } from './styles';
import Button from '../Button';

const Card = ({ item, onEdit, onDelete }) => {

  const getStatusLabel = (status) => {
    switch (status) {
      case 1:
        return 'A fazer';
      case 2:
        return 'Em Progresso';
      case 3:
        return 'Feito';
      case 4:
        return 'Cancelado';
    }
  };

  return (
    <CardWrapper>
      <CardImageContend>
        <CardImage src={item.photo.base64} />
      </CardImageContend>

      <CardContent>
        <CardTitle>{item.name}</CardTitle>
        <CardTitle>{getStatusLabel(item.status)}</CardTitle>
      </CardContent>
      <CardActions>
        <Button type="delete" onClick={onDelete}>Excluir</Button>
        <Button type="edit" onClick={onEdit}>Editar</Button>
      </CardActions>
    </CardWrapper>
  );
};

export default Card;
