import { Carousel } from '../components/Carousel/Carousel';

import { Button } from '../components/Button/Button';

import './Main.css'

export const Inicio = () => {
  return (
    <div className="main-container">
      <div className='main-box'>
        <Carousel />
        <div className='airJordan'>
          <div className='circulo'></div>
          <img src="../../../public/Laye.png" alt="" />
          <div className='oferta'>
            <p className='pSmall'>Oferta especial</p>
            <h2>Air Jordan edição de colecionador</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            <Button
            width={'200px'}
            height={'40px'}
            >Ver oferta</Button>
          </div>
        </div>
      </div>
    </div>
  );
}