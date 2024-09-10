import React from 'react';
import HeaderWithButtons from './Header/HeaderWithButtons';
const LandingPage: React.FC = () => {
  const handleClick = () => {
    alert('Botón clicado');
  };

  return (
    <div>
      <HeaderWithButtons />
      <h1>Bienvenido a Nuestra Página</h1>
    
    </div>
  );
};

export default LandingPage;