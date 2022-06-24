import React from 'react';
import Header from './components/Header';
import Characters from './pages/Characters';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Characters />
      <GlobalStyles />
    </>
  );
};

export default App;
