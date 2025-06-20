import './MeusPedidos.css'
import { motion } from 'motion/react';
import { Nav } from '../Nav/Nav';
import { UseFul } from '../UseFul/UseFul';
import { ListaPedidos } from './ListaPedidos';
import { Lista2 } from './listas/Lista2';
import { Lista3 } from './listas/lista3';

export const MeusPedidos = () =>{

  return (
    <motion.div 
   initial={{opacity: 0, x: 40}} 
   animate={{opacity: 1, x:0}}
   transition={{duration: 0.9}}
    >

    
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

         <div className='box-center'>
            <div className='box-titulo'>
              <h4>meu pedidos</h4>
              <a href="">STATUS</a>
            </div>
            <hr />
            <ListaPedidos/>
            <hr />
            <Lista2/>
             <hr />
            <Lista3/>
            <hr />
            <Lista2/>
         </div>
    </div>

    
    </motion.div>
  );
}