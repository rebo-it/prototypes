import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import "bootstrap-icons/font/bootstrap-icons.css";
import LandingPage from './Components/LandingPage/LandingPage';
import NosotrosPage from './Components/NosotrosPage/NosotrosPage';
import ProductsPage from './Components/ProductsPage/ProductsPage';
import ContactPage from './Components/ContactPage/ContactPage';
import PrivacyPage from './Components/Sections/PrivacySection';
function App() {
  return (
    <Router>
    <Routes>
      {/* Ruta para la página principal o de aterrizaje */}
      <Route path="/prototypes" element={<LandingPage />} />

      {/* Otras rutas */}
      <Route path="/Nosotros" element={<NosotrosPage />} />

      <Route path="/Productos" element={<ProductsPage/>} />
     
      <Route path="/Contacto" element={<ContactPage/>} />

      <Route path="/Privacy" element={<PrivacyPage/>} />

    </Routes>
  </Router>
  );
}

export default App;
