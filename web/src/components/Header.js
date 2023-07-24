import { Link } from 'react-router-dom';
import '../styles/layout/Header.scss';
import phone from '../images/phone.png';
import logoT from '../images/logo-townsville-2.svg';

const Header = (props) => {
  return (
    <header className={`header ${props.padding}`}>
      <Link to='/' className='header__link'>
      <div className='header__title'>
        <img className='header__icon' src={phone} alt="" title='Proyectos para Townsville'/>
        <p className='header__text'>Proyectos para Townsville</p>
      </div>
      </Link>
      <div className='header__img'>
        <img className='header__logo' src={logoT} alt='logo Adalab' />
      </div>
    </header>
  );
};

export default Header;
