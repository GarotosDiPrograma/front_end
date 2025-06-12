import { Carousel } from '../components/Carousel/Carousel';

import { Button } from '../components/Button/Button';

import './Main.css'

export const Inicio = () => {
  return (
    <div className="main-container">
      <div className='main-box'>

        {/* Iniciando Carrossel  */}

        <Carousel />

        {/* Iniciando Coleções em Destaque  */}

        <h3 style={{ textAlign: 'left', margin: '2rem 0 0 6.5rem', color: '#474747' }}>Coleções em Destaque</h3>
        <div className='colDestaque'>
          <div className='colecoes'>
            <div className='prom'>
              <p>30% off</p>
              <h2>Novo Drop Supreme</h2>
              <Button
                width={'9.56rem'}
                height={'3rem'}
                color={'#C92071'}
                margin={'20px 0'}
              >Comprar</Button>
            </div>
            <div className='imgDiv'>
              <img src="../../public/Camisa-StarWars.png" alt="" id='StarWars' />
            </div>
          </div>
          <div className='colecoes'>
            <div className='prom'>
              <p>30% off</p>
              <h2>Coleção Adidas</h2>
              <Button
                width={'9.56rem'}
                height={'3rem'}
                color={'#C92071'}
                margin={'20px 0'}
              >Comprar</Button>
            </div>
            <div className='imgDiv'>
              <img src="../../public/Tenis-SemMarca.png" alt="" id='Adidas' />
            </div>
          </div>
          <div className='colecoes'>
            <div className='prom'>
              <p>30% off</p>
              <h2>Novo Beat Bass</h2>
              <Button
                width={'9.56rem'}
                height={'3rem'}
                color={'#C92071'}
                margin={'20px 0'}
              >Comprar</Button>
            </div>
            <div className='imgDiv'>
              <img src="../../public/HeadPhone.png" alt="" id='HeadPhone' />
            </div>
          </div>
        </div>

        {/* Iniciando Segundo Banner */}

        <h3 style={{ color: '#474747', margin: '3rem 0 1rem 0' }}>Coleções em Destaque</h3>
        <div className='iconsDiv'>
          <a href="#"><img src="../../../public/icon-camisa.svg" alt="" />
            <p>Camisetas</p>
          </a>
          <a href="#"><img src="../../../public/icon-calca.svg" alt="" />
            <p>Calças</p>
          </a>
          <a href="#"><img src="../../../public/icon-calca.svg" alt="" />
            <p>Bonés</p>
          </a>
          <a href="#"><img src="../../../public/icon-phone.svg" alt="" />
            <p>Head Phones</p>
          </a>
          <a href="#"><img src="../../../public/icon-tenis.svg" alt="" />
            <p>Tênis</p>
          </a>
        </div>

        {/* Iniciando Produtos em Alta */}

        <div className='prodEmAlta'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Iniciando Oferta Especial */}

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