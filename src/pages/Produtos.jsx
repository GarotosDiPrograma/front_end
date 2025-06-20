import { Link } from 'react-router-dom';
import './Produtos.css';
import { motion } from 'motion/react';
import './Main.css';

export const Produtos = () => {
  return (
   <motion.div 
   initial={{opacity: 0, x: 40}} 
   animate={{opacity: 1, x:0}}
   transition={{duration: 0.9}}
    >

    <div className="main-container produtos-container">
      <aside className="filtros">
        <h3>Filtrar por</h3>

        <div>
          <h4>Marca</h4>
          <label><input type="checkbox" /> Adidas</label>
          <label><input type="checkbox" /> Balenciaga</label>
          <label><input type="checkbox" /> KSwiss</label>
          <label><input type="checkbox" /> Nike</label>
          <label><input type="checkbox" /> Puma</label>
        </div>

        <div>
          <h4>Categoria</h4>
          <label><input type="checkbox" /> Esporte e lazer</label>
          <label><input type="checkbox" /> Casual</label>
          <label><input type="checkbox" /> Utilitário</label>
          <label><input type="checkbox" /> Corrida</label>
        </div>

        <div>
          <h4>Gênero</h4>
          <label><input type="checkbox" /> Masculino</label>
          <label><input type="checkbox" /> Feminino</label>
          <label><input type="checkbox" /> Unissex</label>
        </div>

        <div>
          <h4>Estado</h4>
          <label><input type="radio" name="estado" /> Novo</label>
          <label><input type="radio" name="estado" /> Usado</label>
        </div>
      </aside>

      <main className="main-box produtos-lista">
        <div className="topo-listagem">
          <h2>Resultados para "Tênis" - 389 produtos</h2>
          <select>
            <option>Mais relevantes</option>
            <option>Menor preço</option>
            <option>Maior preço</option>
            <option>Mais vendidos</option>
            <option>Melhor avaliação</option>
          </select>
        </div>

        <div className="produtos-grid">
          {[...Array(16)].map((_, i) => (
            <div className="produto-card" key={i}>
              {}
              {i < 2 && <span className="desconto">50% OFF</span>}
              
              {}
              <Link to={`/produto/${i + 1}`} className="produto-link">
               <img src="/K-SWISS.svg" alt="Tênis"/>
                <p className="categoria">Tênis</p>
                <h3>K-Swiss V8 - Masculino</h3>
                
                {}
                {i < 2 ? (
                  <p><s>R$ 200,00</s> <strong>R$ 100,00</strong></p>
                ) : (
                  <p><strong>R$ 200,00</strong></p>
                )}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
    </motion.div>
  );
};