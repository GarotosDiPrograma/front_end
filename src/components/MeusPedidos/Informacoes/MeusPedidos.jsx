import './MeusPedidos.css'
import { motion } from 'framer-motion';
import { UseFul } from '../../UseFul/UseFul';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const MeusPedidos = () => {

  return(
    <motion.div
    
      initial={{opacity: 0, x:40}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.9}}
      
      >

      

<div className="box-pai">
    <div className='box-perfil'>
       
       
      
            
      
                  <li>
                    <UseFul
                      margin={'1.875rem 0 0 1.875rem'}
                      value={'Meu Perfil'}
                      color={'#474747'}
                      fontWeight={'900'}
                      to={'/MeuPerfil'}
                    />
                  </li>
                  <hr />
                  <li>
                    <UseFul
                      margin={'1.25rem 0 0 1.875rem'}
                      value={'Meus pedidos'}
                      color={'#474747'}
                      to={'/MeusPedidos'}
                    />
                  </li>
                  <hr />
                  <li>
                    <UseFul
                      margin={'1.25rem 0 0 1.875rem'}
                      value={'Minhas Informações'}
                      color={'#474747'}
                      to={'/MinhasInformacoes'}
                    />
                  </li>
                  <hr />
                  <li>
                    <UseFul
                      margin={'1.25rem 0 0 1.875rem'}
                      value={'Metodos de Pagamentos'}
                      color={'#474747'}
                      to={'/MetodosDePagamentos'}
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
</motion.div>
  )


}