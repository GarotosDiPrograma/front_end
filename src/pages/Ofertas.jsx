
import { motion } from 'motion/react';

import './Main.css'

export const Ofertas = () => {
  return (

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
    >

      <div className="main-container">
        <div className='main-box'>
          <h1>pagina de ofertas</h1>
        </div>
      </div>
    </motion.div>
  );
}