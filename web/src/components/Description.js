import Button from './Button';

const Description = ( {text, link} ) => {
    return (
        <section className='description'>
          <h1 className='description__title'>¡Townsville te necesita!</h1>
          <p className='description__text'>Envía aquí tus proyectos al Alcalde de la ciudad de Townsville</p>
          <Button text={text} link={link}/>
        </section>
    );
};

export default Description;