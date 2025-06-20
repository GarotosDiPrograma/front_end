import { Logo } from '../Logo/Logo';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { ShopCart } from '../ShopCart/ShopCart';
import { UseFul } from '../UseFul/UseFul';
import { Nav } from '../Nav/Nav';
import './Header.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {

  const NavStyle = ({ isActive }) => {
    return {
      fontWeight: isActive && '700',
      paddingBottom: isActive && '0.2rem',
      borderBottom: isActive ? '3px solid #C92071' : 'inherit',
      color: isActive ? '#C92071' : '#666',
    }
  };

  return (
    <>
      <header id="header">
        <div className='box-header'>
          <div className='box-header-children'>
            <Logo margin={'.5rem 0 0 .25rem'} />
            <Input
              width={'34.938rem'}
              height={'3.75rem'}
              margin={'0 3rem 0 1.688rem'}
              type={'text'}
              placeholder={'pesquisar produto...'}
              src={'../../../public/search.svg'}
            />
            <UseFul
              href={'#'}
              value={'Cadastre-se'}
              margin={'1.2rem 0 0 0'}
              color={'#474747'}
              textDecoration={'underline'}
            />
            <Nav
              position={'absolute'}
              top={'8.375rem'}
              gap={'2rem'}
              width={'26.438rem'}
              height={'1.813rem'}
            >
              <li>
                <NavLink style={NavStyle} to={'/'}>Inicio</NavLink>
              </li>
              <li>
                <NavLink style={NavStyle} to={'/produtos'}>Produtos</NavLink>
              </li>
              <li>
                <NavLink style={NavStyle} to={'/pedidos'}>Pedidos</NavLink>
              </li>
              <li>
                {/* <UseFul
                  value={'Ofertas'}
                  color={'#666'}
                  to={'/ofertas'}
                /> */}
                <NavLink style={NavStyle} to={'/ofertas'}>Ofertas</NavLink>
              </li>
            </Nav>
          </div>
          <Button
            width={'7.125rem'}
            height={'2.5rem'}
            margin={'2.75rem 0 0 1.875rem'}
          >Entrar</Button>
          <ShopCart value={7} />
        </div>
      </header>
    </>
  );
}