import React from 'react';
import './App.css';
import Button from './Components/Buttons/Button';


function App() {
  return (
 <Button  label='Get Started' variant='GetStarted' size='large' onClick={function (): void {
      throw new Error('Function not implemented.');
    } } />
  );
}

export default App;
