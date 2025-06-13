
import { MeusPedidos } from '../components/MeusPedidos/Pedidos/MeusPedidos'
import { Mpedidos } from '../components/MeusPedidos/Pedidos/Mpedidos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Main.css'

export const Pedidos = () => {
  return(
    <div className="main-container">
      <div className='main-box'>
        <MeusPedidos/>

      </div>
    </div>
  );
}