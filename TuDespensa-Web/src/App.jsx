import React from "react";
import Pagina_Inicio from "./pages/Pagina_Inicio";
import { Sobre_Nosotros } from "./pages/Sobre_Nosotros";
import { Planes } from "./pages/Planes";
import RecetasWebFree from "./pages/recetasWebFree";
import { Ingresar } from "./pages/Ingresar";
import { Registrar } from "./pages/Registrar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactanos from "./pages/Contactanos";
import { AuthProvider } from "./context/AuthContext";
import { Aside } from "./components/Aside";
import { VerifyEmail } from "./pages/VerifyEmail";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pagina_Inicio />} />
          <Route path="/sobre_nosotros" element={<Sobre_Nosotros />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/recetas" element={<RecetasWebFree />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/ingresar" element={<Ingresar />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/despensa" element={<Aside />} />
          <Route path="verify-email" element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
