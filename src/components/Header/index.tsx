import React from 'react';
import { Container, Logo } from '../styles/Header.styled';
import imgLogo from './assets/marvel-logo-4.png';

export default function Header() {
  return (
    <Container>
      <Logo src={imgLogo} alt="logo" />
    </Container>
  );
}
