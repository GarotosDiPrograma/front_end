import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './ProdutosDetalhes.css';

export const ProdutoDetalhes = () => {
  const { id } = useParams();
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState('');
  const [corSelecionada, setCorSelecionada] = useState('');
  const [imagemAtual, setImagemAtual] = useState(0);

  const produto = {
    nome: "Tênis Nike Revolution 6 Next Nature Masculino",
    categoria: "Tênis",
    preco: 219.00,
    precoAntigo: 300.00,
    avaliacao: 5.0,
    numeroAvaliacoes: 90,
    descricao: "O Tênis K-Swiss V8 Masculino é ideal para quem busca performance e estilo. Com um design moderno e materiais de alta qualidade, oferece conforto durante todo o dia. A sola de borracha garante aderência e estabilidade, enquanto o cabedal proporciona ventilação adequada para os pés.",
    tamanhos: [39, 40, 41, 42, 43],
    cores: [
      { nome: 'Vermelho', hex: '#ff0000' },
      { nome: 'Verde', hex: '#00ff00' },
      { nome: 'Cinza', hex: '#808080' },
      { nome: 'Amarelo', hex: '#ffff00' }
    ],
    imagens: [
      "/../../../assets/nike-red.png",
      "/../../../assets/nike-green.png",
      "/../../../assets/nike-gray.png",
      "/../../../assets/nike-yellow.png"
    ]
  };

  const produtosRelacionados = [
    {
      nome: "K-Swiss V8 - Masculino",
      preco: 100.00,
      precoAntigo: 200.00,
      desconto: "30% OFF",
      imagem: "/../../../public/K-SWISS.svg"
    },
    {
      nome: "K-Swiss V8 - Masculino",
      preco: 100.00,
      precoAntigo: 200.00,
      desconto: "30% OFF",
      imagem: "/../../../public/K-SWISS.svg"
    },
    {
      nome: "K-Swiss V8 - Masculino",
      preco: 100.00,
      precoAntigo: 200.00,
      imagem: "/../../../public/K-SWISS.svg"
    },
    {
      nome: "K-Swiss V8 - Masculino",
      preco: 100.00,
      precoAntigo: 200.00,
      imagem: "/../../../public/K-SWISS.svg"
    }
  ];

  return (
    <div className="produto-detalhes-container">
      {}
      <nav className="breadcrumb">
        <a href="/">Home</a> / <a href="/produtos">Produtos</a> / <a href="/produtos">Tênis</a> / <a href="/produtos">Nike</a> / <span>{produto.nome}</span>
      </nav>

      {/* Conteúdo Principal */}
      <div className="produto-content">
        {/* Galeria de Imagens */}
        <div className="produto-galeria">
          <div className="imagem-principal">
            <button className="nav-btn prev" onClick={() => setImagemAtual(imagemAtual > 0 ? imagemAtual - 1 : produto.imagens.length - 1)}>
              ‹
            </button>
            <img src={produto.imagens[imagemAtual]} alt={produto.nome} />
            <button className="nav-btn next" onClick={() => setImagemAtual(imagemAtual < produto.imagens.length - 1 ? imagemAtual + 1 : 0)}>
              ›
            </button>
          </div>
          
          <div className="miniaturas">
            {produto.imagens.map((imagem, index) => (
              <div
                key={index}
                className={`miniatura ${index === imagemAtual ? 'ativa' : ''}`}
                onClick={() => setImagemAtual(index)}
              >
                <img src={imagem} alt={`${produto.nome} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="produto-info">
          <h1>{produto.nome}</h1>
          <p className="categoria">{produto.categoria}</p>
          
          <div className="avaliacao">
            <div className="estrelas">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="estrela">★</span>
              ))}
              <span className="nota">{produto.avaliacao}</span>
            </div>
            <span className="numero-avaliacoes">({produto.numeroAvaliacoes} avaliações)</span>
          </div>

          <div className="preco">
            <span className="preco-atual">R$ {produto.preco.toFixed(2).replace('.', ',')}</span>
            <span className="preco-antigo">R$ {produto.precoAntigo.toFixed(2).replace('.', ',')}</span>
          </div>

          <p className="descricao">{produto.descricao}</p>

          <div className="opcoes">
            <div className="tamanho-secao">
              <h4>Tamanho</h4>
              <div className="tamanhos">
                {produto.tamanhos.map((tamanho) => (
                  <button
                    key={tamanho}
                    className={`tamanho-btn ${tamanhoSelecionado === tamanho ? 'selecionado' : ''}`}
                    onClick={() => setTamanhoSelecionado(tamanho)}
                  >
                    {tamanho}
                  </button>
                ))}
              </div>
            </div>

            <div className="cor-secao">
              <h4>Cor</h4>
              <div className="cores">
                {produto.cores.map((cor, index) => (
                  <button
                    key={index}
                    className={`cor-btn ${corSelecionada === cor.nome ? 'selecionado' : ''}`}
                    style={{ backgroundColor: cor.hex }}
                    onClick={() => setCorSelecionada(cor.nome)}
                    title={cor.nome}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          <button className="btn-adicionar">ADICIONAR</button>
        </div>
      </div>

      {}
      <section className="produtos-relacionados">
        <div className="secao-header">
          <h2>Produtos Relacionados</h2>
          <a href="/produtos" className="ver-todos">Ver todos →</a>
        </div>
        
        <div className="produtos-relacionados-grid">
          {produtosRelacionados.map((produto, index) => (
            <div key={index} className="produto-relacionado">
              {produto.desconto && <span className="desconto-badge">{produto.desconto}</span>}
              <img src={produto.imagem} alt={produto.nome} />
              <p className="categoria">Tênis</p>
              <h3>{produto.nome}</h3>
              <div className="preco-relacionado">
                {produto.precoAntigo && <s>R$ {produto.precoAntigo.toFixed(2).replace('.', ',')}</s>}
                <strong>R$ {produto.preco.toFixed(2).replace('.', ',')}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};