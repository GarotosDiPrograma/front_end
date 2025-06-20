import { Route, Routes, } from 'react-router-dom';

import { MeusPedidos } from '../components/Mpedidos/MeusPedidos';

import { MinhasInfor } from '../components/Mpedidos/MinhasInfor';

import './Main.css'

export const Pedidos = () => {
  return (

    <div className="main-container">
      <div className='main-box'>
        <MeusPedidos />
        <Routes>
          <Route path='MinhasInfor' element={<MinhasInfor />} />
        </Routes>
      </div>
    </div>


  );
}