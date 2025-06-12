import { Logo } from '../Logo/Logo';
import { UseFul } from '../UseFul/UseFul';

import './Footer.css'

export const Footer = () => {
  return (
    <footer id="footer">
      <div className='box-footer'>
        <div className='content'>
          <div className='logo-box'>
            <Logo
              color={'#F5F5F5'}
              margin={'0 0 1.2rem 0'}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi nisi labore, atque error possimus delectus illo!
            </p>
            <div className='icon-box'>
              <img src="../../../public/icon-facebook.svg" />
              <img src="../../../public/icon-insta.svg" />
              <img src="../../../public/icon-twiiter.svg" />
            </div>
          </div>
          <div className='informacao-box'>
            <h3>Informação</h3>
            <li>
              <UseFul
                margin={'0 0 1rem 0'}
                value={'Sobre Drip Store'}
                color={'#F5F5F5'}
                to={'#'}
              />
            </li>
            <li>
              <UseFul
                margin={'0 0 1rem 0'}
                value={'Segurança'}
                color={'#F5F5F5'}
                to={'#'}
              />
            </li>
            <li>
              <UseFul
                margin={'0 0 1rem 0'}
                value={'Whilist'}
                color={'#F5F5F5'}
                to={'#'}
              />
            </li>
            <li>
              <UseFul
                margin={'0 0 1rem 0'}
                value={'Blog'}
                color={'#F5F5F5'}
                to={'#'}
              />
            </li>
            <li>
              <UseFul
                margin={'0 0 1rem 0'}
                value={'Trabalhe Conosco'}
                color={'#F5F5F5'}
                to={'#'}
              />
            </li>
            <li>
              <UseFul
                margin={'0 0 1rem 0'}
                value={'Meus Pedidos'}
                color={'#F5F5F5'}
                to={'#'}
              />
            </li>
          </div>
          <div className='categorias-box'>
            <h3>Categorias</h3>
            <li>
              <UseFul
                margin={'0 0 1rem 0'}
                value={'Camisetas'}
                color={'#F5F5F5'}
                to={'#'}
              />
            </li>
            <li>
              <UseFul
                margin={'0 0 1rem 0'}
                value={'Calças'}
                color={'#F5F5F5'}
                to={'#'}
              />
            </li>
            <li>
              <UseFul
                margin={'0 0 1rem 0'}
                value={'Bonés'}
                color={'#F5F5F5'}
                to={'#'}
              />
            </li>
            <li>
              <UseFul
                margin={'0 0 1rem 0'}
                value={'Headphones'}
                color={'#F5F5F5'}
                to={'#'}
              />
            </li>
            <li>
              <UseFul
                margin={'0 0 1rem 0'}
                value={'Tênis'}
                color={'#F5F5F5'}
                to={'#'}
              />
            </li>
          </div>
          <div className='contato-box'>
            <h3>Contato</h3>
            <p>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
            </p>
            <p>(85) 3051-3411</p>
          </div>
        </div>
        <p className='box-copy'>&copy; 2025 Geração Tech</p>
      </div>
    </footer>
  );
}