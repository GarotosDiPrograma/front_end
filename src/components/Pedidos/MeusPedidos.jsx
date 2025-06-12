import './MeusPedidos.css'
import { UseFul } from '../UseFul/UseFul';


export const MeusPedidos = () => {

  return(
<div className="box-pai">
    <div className='box-perfil'>
       <li>
                    <UseFul
                      margin={'1.875rem 0 0 1.875rem'}
                      value={'Meu Perfil'}
                      color={'#474747'}
                      fontWeight={'900'}
                      to={'#'}
                    />
                  </li>
                  <hr />
                  <li>
                    <UseFul
                      margin={'1.25rem 0 0 1.875rem'}
                      value={'Meus pedidos'}
                      color={'#474747'}
                      to={'#'}
                    />
                  </li>
                  <hr />
                  <li>
                    <UseFul
                      margin={'1.25rem 0 0 1.875rem'}
                      value={'Minhas Informações'}
                      color={'#C92071'}
                      fontWeight={"900"}
                      to={'#'}
                    />
                  </li>
                  <hr />
                  <li>
                    <UseFul
                      margin={'1.25rem 0 0 1.875rem'}
                      value={'Metodos de Pagamentos'}
                      color={'#474747'}
                      to={'#'}
                    />
                  </li>
    </div>

    <div className='box-informaçoes'>
      <div className='box-1'>
        <p>Minhas Informações</p>
        <li>
              <UseFul
              href={'#'}
              value={'entrar'}
              margin={'0 0 0 0'}
              color={'#C92071'}
              textDecoration={'underline'}
            />
             </li>
      </div>
      <hr/>
      <div className='box-info-pessoal'>
          <p style={{fontWeight: 'bold', fontSize: '1rem'}}>Informações Pessoais</p>
          <div className='box-p'><p style={{color: '#8F8F8F'}}>Nome:</p> <p>Francisco Antonio pereira</p></div>
         <div className='box-p'><p style={{color: '#8F8F8F'}}>CPF:</p> <p>123485913-35</p></div>
         <div className='box-p'><p style={{color: '#8F8F8F'}}>Email:</p> <p>francisco@gmail.com</p></div>
          <div className='box-p'><p style={{color: '#8F8F8F'}}>Celular:</p> <p>(85) 5555-5555</p></div>
      </div>
      <hr />
      <div className='box-info-pessoal'>
          <p style={{fontWeight: 'bold', fontSize: '1rem'}}>Informações De Entrega</p>
          <div className='box-p'><p style={{color: '#8F8F8F'}}>Endereço:</p> <p>Rua Joao Pessoa, 123</p></div>
          <div className='box-p'><p style={{color: '#8F8F8F'}}>Bairro:</p> <p>Centro</p></div>
          <div className='box-p'><p style={{color: '#8F8F8F'}}>Cidade:</p> <p>Fortaleza</p></div>
          <div className='box-p'><p style={{color: '#8F8F8F'}}>Cep:</p> <p>433-8800</p></div>
      </div>
    
     

    </div>
</div>
  )


}