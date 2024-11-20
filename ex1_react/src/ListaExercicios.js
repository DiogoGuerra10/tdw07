import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TodoProvider } from './Context';
import Navbar from './Navbar';
import App from './App';
import Home from './Home';
import About from './About';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';

const ListaExercicios = () => {
  return (
    <TodoProvider>  
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/App" element={<App />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/App2" element={<App2 />} />
            <Route path="/App3" element={<App3 />} />
            <Route path="/App4" element={<App4 />} />
            <Route path="/App5" element={<App5 />} />
          </Routes>
        </div>
      </Router>
    </TodoProvider>
  );
};

export default ListaExercicios;
