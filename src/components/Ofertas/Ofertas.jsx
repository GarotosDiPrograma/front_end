
import './Ofertas.css'

export const Ofertas = () => {
  return (
    <>
      <div className='Produtos'>
        <h2>Produtos em alta</h2>
        <a href="#">Ver todos <img src="../../public/Line.svg" alt="" /></a>
      </div>
      <div className='Produtos'>
      <div className='GridProdutos'>
        {[...Array(8)].map((_, i) => (
            <div className="produto-card" key={i}>
              <span className="desconto">50% OFF</span>
              <img src="/../../../public/K-SWISS.svg" alt="Tênis" />
              <p className="categoria">Tênis</p>
              <h3>K-Swiss V8 - Masculino</h3>
              <p><s>R$ 200,00</s> <strong>R$ 100,00</strong></p>
            </div>
          ))}
      </div>
      </div>
    </>
  );
}