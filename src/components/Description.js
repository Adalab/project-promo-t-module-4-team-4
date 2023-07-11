import Button from './Button';

const Description = ( {text, link} ) => {
    return (
        <section className='description'>
          <h1 className='description__title'>Proyectos Molones</h1>
          <p className='description__text'>Escaparate en línea para recoger ideas a través de la tecnología.</p>
          <Button text={text} link={link}/>
        </section>
    );
};

export default Description;