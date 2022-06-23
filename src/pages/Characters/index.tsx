import React, { useEffect } from 'react';
import api from '../../Services/api';

const Characters: React.FC = () => {
  useEffect(() => {
    api
      .get('/characters')
      .then((Response) => console.log(Response.data.data.results))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${baseUrl}ts=${time}&apikey=${publicKey}&hash=${hash}`)
  //     .then((Response) => console.log(Response.data.data.results))
  //     .catch((err) => console.log(err));
  // }, []);

  return <div>Characters</div>;
};

export default Characters;
