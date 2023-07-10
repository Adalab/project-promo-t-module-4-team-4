import { Link } from 'react-router-dom';
import '../styles/layout/Header.scss';

const Header = (props) => {
  return (
    <header className='header'>
      <Link to='/'>
      <div className='header__title'>
        <i className='fa-solid fa-laptop-code header__laptopIcon'></i>
        <p className='header__text'>Proyectos Molones</p>
      </div>
      </Link>
      <div className='header__img'>
        <img className='header__logo' src={props.logo} alt='logo Adalab' />
      </div>
    </header>
  );
};

export default Header;
