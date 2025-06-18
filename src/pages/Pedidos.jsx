import { Route, Routes,} from 'react-router-dom';
import { MeusPedidos } from '../components/Mpedidos/MeusPedidos';

import './Main.css'
import { MinhasInfor } from '../components/Mpedidos/MinhasInfor';

export const Pedidos = () => {
  return(
        
          <div className="main-container">
            <div className='main-box'>
              <MeusPedidos/>
              <Routes>
                <Route path='MinhasInfor' element={<MinhasInfor />} />
              </Routes>
            </div>
          </div>
        

  );
}