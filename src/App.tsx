import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import { myTheme } from './theme';
import Main from './screens/Main';
import About from './screens/About';
import Projects from './screens/Projects';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={myTheme}>
        <header>
        </header>
        <NavBar />
        <Main />
        <About />
        <Projects />
      </ChakraProvider>
    </div>
  );
}

export default App;
