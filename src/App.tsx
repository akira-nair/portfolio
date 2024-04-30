import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import { myTheme } from './theme';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={myTheme}>
        <header>
        </header>
        <NavBar />
      </ChakraProvider>
    </div>
  );
}

export default App;
