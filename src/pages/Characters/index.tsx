import React, { useEffect, useState } from 'react';
import api from '../../Services/api';

import { Container } from './styles';

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

  return (
    <Container>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <strong>{character.name}</strong>
            <p>{character.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Characters;
