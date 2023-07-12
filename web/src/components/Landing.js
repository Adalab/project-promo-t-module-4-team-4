import Description from './Description';
import img from '../images/townsville.jpg';
import '../styles/layout/Landing.scss';

const Landing = () => {
    return (
        <section className='landing'>
        <Description text={'Nuevo proyecto'} link={'/new-project'}/>
        <div className='landing__img'></div>
        </section>
    );
};

export default Landing;