import React from 'react';

import { Container } from './styles';
import { Logo } from '../global';

export default function Header() {
  return (
    <Container>
      <Logo size={35} />
    </Container>
  );
}
