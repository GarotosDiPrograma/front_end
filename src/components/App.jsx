import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Inicio } from '../pages/Inicio';
import { Produtos } from '../pages/Produtos';
import { ProdutosDetalhes } from '../pages/ProdutosDetalhes';
import { Pedidos } from '../pages/Pedidos';
import { Ofertas } from '../pages/Ofertas';
import { NaoEncontrado } from '../pages/NaoEncontrado';

export const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/produto/:id' element={<ProdutosDetalhes />} />
        <Route path='/pedidos' element={<Pedidos />} />
        <Route path='/ofertas' element={<Ofertas />} />
        <Route path='*' element={<NaoEncontrado />} />
      </Routes>

      <Footer />
    </Router>
  );
};
