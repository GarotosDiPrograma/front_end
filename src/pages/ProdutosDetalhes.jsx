import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProdutosDetalhes.css';

export const ProdutosDetalhes = () => {
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
      { nome: 'Amarelo', hex: '#ff8c00' },
      { nome: 'Cinza', hex: '#808080' },
      { nome: 'Verde', hex: '#228b22' },
      { nome: 'Vermelho', hex: '#dc143c' }
    ],
    imagens: [
      "/nike-yellow.png",
      "/nike-gray.png",
      "/nike-green.png",
      "/nike-red.png"
    ]
  };

  const produtosRelacionados = [
    {
      nome: "K-Swiss V8 - Masculino",
      preco: 100.00,
      precoAntigo: 200.00,
      desconto: "50% OFF",
      imagem: "/K-SWISS.svg"
    },
    {
      nome: "K-Swiss V8 - Masculino",
      preco: 100.00,
      precoAntigo: 200.00,
      desconto: "50% OFF",
      imagem: "/K-SWISS.svg"
    },
    {
      nome: "K-Swiss V8 - Masculino",
      preco: 200.00,
      imagem: "/K-SWISS.svg"
    },
    {
      nome: "K-Swiss V8 - Masculino",
      preco: 200.00,
      imagem: "/K-SWISS.svg"
    }
  ];

  const navegarImagem = (direcao) => {
    let novoIndice;
    if (direcao === 'prev') {
      novoIndice = imagemAtual > 0 ? imagemAtual - 1 : produto.imagens.length - 1;
    } else {
      novoIndice = imagemAtual < produto.imagens.length - 1 ? imagemAtual + 1 : 0;
    }

    setImagemAtual(novoIndice);
    setCorSelecionada(produto.cores[novoIndice].nome);
  };

  const selecionarCor = (cor, index) => {
    setCorSelecionada(cor);
    setImagemAtual(index);
  };

  const selecionarImagem = (index) => {
    setImagemAtual(index);
    setCorSelecionada(produto.cores[index].nome);
  };

  useEffect(() => {
    if (!corSelecionada && produto.cores.length > 0) {
      setCorSelecionada(produto.cores[0].nome);
    }
  }, []);

  const corAtual = produto.cores[imagemAtual]?.hex || '#C92071';

  return (
    <div className="produto-detalhes-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <a href="/produtos">Produtos</a> / <a href="/produtos">Tênis</a> / <a href="/produtos">Nike</a> / <span>{produto.nome}</span>
      </nav>

      <div className="produto-content">
        <div className="produto-galeria">
          <div
            className="imagem-principal"
            style={{ backgroundColor: `${corAtual}20` }}
          >
            <button
              className="nav-btn prev"
              onClick={() => navegarImagem('prev')}
              style={{ backgroundColor: `${corAtual}20`, borderColor: corAtual, color: corAtual }}
            >
              ‹
            </button>
            <img
              src={produto.imagens[imagemAtual]}
              alt={produto.nome}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Imagem+não+encontrada';
              }}
            />
            <button
              className="nav-btn next"
              onClick={() => navegarImagem('next')}
              style={{ backgroundColor: `${corAtual}20`, borderColor: corAtual, color: corAtual }}
            >
              ›
            </button>
          </div>

          <div className="miniaturas">
            {produto.imagens.map((imagem, index) => (
              <div
                key={index}
                className={`miniatura ${index === imagemAtual ? 'ativa' : ''}`}
                onClick={() => selecionarImagem(index)}
                style={{ borderColor: index === imagemAtual ? produto.cores[index]?.hex : 'transparent' }}
              >
                <img
                  src={imagem}
                  alt={`${produto.nome} ${index + 1}`}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/80x60?text=Img';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

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
                    onClick={() => selecionarCor(cor.nome, index)}
                    title={cor.nome}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          <button className="btn-adicionar">ADICIONAR</button>
        </div>
      </div>

      <section className="produtos-relacionados">
        <div className="secao-header">
          <h2>Produtos Relacionados</h2>
          <a href="/produtos" className="ver-todos">Ver todos →</a>
        </div>

        <div className="produtos-relacionados-grid">
          {produtosRelacionados.map((produto, index) => (
            <div key={index} className="produto-relacionado">
              {produto.desconto && <span className="desconto-badge">{produto.desconto}</span>}
              <img
                src={produto.imagem}
                alt={produto.nome}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200x150?text=Produto';
                }}
              />
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
