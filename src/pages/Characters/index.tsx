import React, { useEffect, useState } from 'react';
import api from '../../Services/api';

import {
  Container,
  CardList,
  Card,
  CardHeader,
  Strong,
  Image,
  ImageContainer,
} from '../styles/Characters.styled';

interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([]);

  useEffect(() => {
    api
      .get('/characters')
      .then((Response) => {
        setCharacters(Response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(characters);

  return (
    <Container>
      <CardList>
        {characters.map((character) => (
          <Card key={character.id}>
            <ImageContainer>
              <Image
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              />
            </ImageContainer>
            <Strong>{character.name}</Strong>
            <CardHeader>{character.description}</CardHeader>
          </Card>
        ))}
      </CardList>
    </Container>
  );
};

export default Characters;
