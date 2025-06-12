import { Link } from 'react-router-dom';
import './Logo.css';

export const Logo = ({ color, margin }) => {
  return (
    <Link style={{ margin: margin }} to="/" className='logo'>
      <img src={!color ? '../../../public/logo.svg' :
        '../../../public/logo-white.svg'
      } />
      <span style={{ color: color }}>Drip Store</span>
    </Link>
  );
}