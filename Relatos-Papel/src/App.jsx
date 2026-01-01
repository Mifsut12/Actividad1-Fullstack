import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Carrito } from './components/carrito'
import { Libro } from './components/libro'
import { CarritoProvider } from './context/CarritoContext'
import { Inicio } from './components/inicio'
import { Landing } from './components/landing'
import { Navigate } from 'react-router-dom'
import { Exito } from './components/exito'
import { Fracaso } from './components/fracaso'
import { Buscar } from './components/busqueda'
import { Checkout } from './components/checkout'
function AppContent() {
  return (
    <div className="layout__container">
      

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/components/inicio" element={<Inicio />} />
        <Route path="/components/libro/:id" element={<Libro />} />
        <Route path="/components/carrito" element={<Carrito />} />
        <Route path="/components/checkout" element={<Checkout />} /> 
        <Route path = "/components/busqueda/:nombre" element = {<Buscar />}/>
        <Route path = "/components/exito" element = {<Exito />}/>
        <Route path = "/components/fracaso" element = {<Fracaso />}/>
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>

      

    </div>
  );
}

export  function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <AppContent />
      </CarritoProvider>
    </BrowserRouter>
  );
}
