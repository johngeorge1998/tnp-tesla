 import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
  import GlobalStyle from './GlobalStyles';  
import Customize from './components/features/Customize';

const App = () => {
  return (
    <Router>
      <GlobalStyle />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customize />} />

        </Routes>
    </Router>
  );
};

export default App;
