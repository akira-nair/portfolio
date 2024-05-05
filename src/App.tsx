import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Switch } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import { myTheme } from './theme';
import Main from './screens/Main';
import About from './screens/About';
import Projects from './screens/Projects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Seljay from './pages/projects/Seljay';
import SongCard from './pages/projects/SongCard';
import IMSLP from './pages/projects/IMSLP';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={myTheme}>
        <BrowserRouter>
        <header>
        </header>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects/jatshoen-seljay' element={<Seljay/>} />
          <Route path='/projects/uiux-development' element={<SongCard/>} />
          <Route path='/projects/uiux-redesign' element={<IMSLP/>} />
          <Route path='/projects/jatshoen-yoenten' />
        </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
