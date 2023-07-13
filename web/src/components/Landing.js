import Description from './Description';
import '../styles/layout/Landing.scss';
import Header from './Header';
import logo from '../images/logo-adalab.png'

const Landing = () => {
    return (
      <div className='landing__img'>
        <Header logo={logo} padding={'padding'} />
        <section className='landing'>
          <Description text={'Nuevo proyecto'} link={'/new-project'} />
        </section>
      </div>
    );
};

export default Landing;