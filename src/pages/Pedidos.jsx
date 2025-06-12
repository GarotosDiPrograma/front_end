
import { MeusPedidos } from '../components/Pedidos/MeusPedidos';
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