import React from 'react';
import { CardWrapper, CardImage, CardContent, CardActions, CardTitle, CardImageContend } from './styles';
import Button from '../Button';

const Card = ({ nome, image, onEdit, onDelete }) => {
  const imageSrc = `data:image/png;base64,${image}`;

  return (
    <CardWrapper>
      <CardImageContend>
        <CardImage src={imageSrc} />
      </CardImageContend>

      <CardContent>
        <CardTitle>{nome}</CardTitle>
      </CardContent>
      <CardActions>
        <Button type="delete" onClick={onDelete}>Excluir</Button>
        <Button type="edit" onClick={onEdit}>Editar</Button>
      </CardActions>
    </CardWrapper>
  );
};

export default Card;
