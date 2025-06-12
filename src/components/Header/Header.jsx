import { Logo } from '../Logo/Logo';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { ShopCart } from '../ShopCart/ShopCart';
import { UseFul } from '../UseFul/UseFul';
import { Nav } from '../Nav/Nav';
import './Header.css';

export const Header = () => {

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
                <UseFul
                  value={'Inicio'}
                  color={'#666'}
                  to={'/'}
                />
              </li>
              <li>
                <UseFul
                  value={'Produtos'}
                  color={'#666'}
                  to={'/produtos'}
                />
              </li>
              <li>
                <UseFul
                  value={'Meus Pedidos'}
                  color={'#666'}
                  to={'/pedidos'}
                />
              </li>
              <li>
                <UseFul
                  value={'Ofertas'}
                  color={'#666'}
                  to={'/ofertas'}
                />
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