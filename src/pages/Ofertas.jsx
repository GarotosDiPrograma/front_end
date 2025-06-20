import { Link } from 'react-router-dom';
import './Ofertas.css';

export const Ofertas = () => {
  const products = {
  tenis: [
    {
      id: 1,
      name: "Tênis Nike Amarelo",
      originalPrice: 200.00,
      salePrice: 150.00,
      discount: 25,
      image: "/nike-yellow.png"
    },
    {
      id: 2,
      name: "Tênis Nike Vermelho",
      originalPrice: 220.00,
      salePrice: 180.00,
      discount: 18,
      image: "/nike-red.png"
    },
    {
      id: 3,
      name: "Tênis Nike Verde",
      originalPrice: 250.00,
      salePrice: 200.00,
      discount: 20,
      image: "/nike-green.png"
    },
    {
      id: 4,
      name: "Tênis Nike Cinza",
      originalPrice: 230.00,
      salePrice: 170.00,
      discount: 26,
      image: "/nike-gray.png"
    }
  ],
  camisas: [
    {
      id: 5,
      name: "Camisa Polo Verde",
      originalPrice: 80.00,
      salePrice: 60.00,
      discount: 25,
      image: "/camisa.png"
    },
    {
      id: 10,
      name: "Camisa Polo Amarela",
      originalPrice: 85.00,
      salePrice: 65.00,
      discount: 24,
      image: "/camisa-amarela.png"
    },
    {
      id: 11,
      name: "Camisa Polo Vermelha",
      originalPrice: 90.00,
      salePrice: 70.00,
      discount: 22,
      image: "/camisa-vermelha.png"
    }
  ],
  calcas: [
    {
      id: 6,
      name: "Calça Jogger Preta",
      originalPrice: 160.00,
      salePrice: 130.00,
      discount: 19,
      image: "/calça-moletom.png"
    },
    {
      id: 7,
      name: "Calça Carga Caqui",
      originalPrice: 170.00,
      salePrice: 140.00,
      discount: 18,
      image: "/calça.png"
    },
    {
      id: 8,
      name: "Calça Jeans Azul",
      originalPrice: 150.00,
      salePrice: 120.00,
      discount: 20,
      image: "/calça-jeans.png"
    }
  ],
  bermudas: [
    {
      id: 9,
      name: "Bermuda Jeans Claro",
      originalPrice: 90.00,
      salePrice: 70.00,
      discount: 22,
      image: "/bermuda.png"
    },
    {
      id: 12,
      name: "Bermuda Azul com Corda",
      originalPrice: 95.00,
      salePrice: 75.00,
      discount: 21,
      image: "/bermuda-azul.png"
    },
    {
      id: 13,
      name: "Bermuda Cargo Verde",
      originalPrice: 100.00,
      salePrice: 80.00,
      discount: 20,
      image: "/bermuda-verde.png"
    }
  ]
};


  const formatPrice = (price) => {
    return price.toFixed(2).replace('.', ',');
  };

  const ProductCard = ({ product }) => {
  const isTenis = product.name.includes("Tênis");

  const cardContent = (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' dy='.3em' fill='%23666'%3ESapato Nike%3C/text%3E%3C/svg%3E";
          }}
        />
        <div className="discount-badge">
          {product.discount}% OFF
        </div>
      </div>
      <div className="product-info">
        <p className="product-category">
          {product.name.includes('Tênis') ? 'Tênis' : 
           product.name.includes('Camisa') ? 'Camisa' : 
           product.name.includes('Calça') ? 'Calça' : 'Bermuda'}
        </p>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-prices">
          <span className="original-price">
            R$ {formatPrice(product.originalPrice)}
          </span>
          <span className="sale-price">
            R$ {formatPrice(product.salePrice)}
          </span>
        </div>
      </div>
    </div>
  );

  return isTenis ? (
    <Link to={`/produto/${product.id}`} style={{ textDecoration: 'none' }}>
      {cardContent}
    </Link>
  ) : cardContent;
};

  const CategorySection = ({ title, products }) => (
    <div className="category-section">
      <div className="category-header">
        <h2 className="category-title">{title}</h2>
      </div>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="ofertas-container">
      <div className="ofertas-header">
        <h1>
          Desconto de até <span className="ofertas-discount">45% OFF</span> no Pix! Não perca essa oportunidade!
        </h1>
        <button className="ofertas-close-btn">
          não perca
        </button>
      </div>
      <div className="ofertas-content">
        <CategorySection 
          title="Tênis" 
          products={products.tenis} 
        />
        
        <CategorySection 
          title="Camisa" 
          products={products.camisas} 
        />
        
        <CategorySection 
          title="Calça" 
          products={products.calcas} 
        />
        
        <CategorySection 
          title="Bermuda" 
          products={products.bermudas} 
        />
      </div>
    </div>
  );
};