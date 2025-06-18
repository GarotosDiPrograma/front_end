import './MinhasInfor.css'
import { motion } from 'motion/react';
import { Nav } from '../Nav/Nav';
import { UseFul } from '../UseFul/UseFul';

export const MinhasInfor = () =>{

  return (
    <motion.div 
   initial={{opacity: 0, x: 40}} 
   animate={{opacity: 1, x:0}}
   transition={{duration: 0.9}}
    >


<div className='box-todos'>
    <div className='box-pai'>

        <div className='box-links'>
             <div className='nav'>
                      <Nav
                        position={'absolute'}
                        flexDirection={'column'}
                        margin={'1.50rem 0 0 0'}
                                                                                  
                      >
                        <li>
                          <UseFul
                            value={'Meu Perfíl'}
                            color={'#474747'}
                            to={''}
                            fontWeight={'800'}
                        
                          
                           
                          />
                        </li>
                        <hr/>
                        <li>
                          <UseFul
                            value={'Meus pedidos'}
                            color={'#474747'}
                            to={'/pedidos'}
                            fontWeight={'500'}
                            
                             
                
                          />
                        </li>
                        <hr/>
                        <li>
                          <UseFul
                            value={'Minhas informações'}
                            color={'#474747'}
                            to={'/MinhasInfor'}
                            fontWeight={'500'}
                            
                          />
                        </li>
                        <hr/>
                        <li>
                          <UseFul
                            value={'Métodos de Pagamento'}
                            color={'#474747'}
                            to={''}
                            fontWeight={'500'}
                            
                          />
                        </li>
                      </Nav>
               </div>
        </div>

         <div className='satanas'>
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
</div>
    </motion.div>
  );
}