import '../styles/layout/NotFound.scss';
import Button from './Button';

const NotFound = ( {text, link} ) => {
  return (
    <section className='notfound'>
      <h3 className='notfound_text'>
        Lo sentimos, la página que buscas no existe...
      </h3>
      <div className='notfound_image'></div>
      <Button text={text} link={link}/>
    </section>
  );
};

export default NotFound;
