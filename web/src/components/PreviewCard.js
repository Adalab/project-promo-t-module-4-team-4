import user from '../images/user.jpg';

const PreviewCard = (props) => {
  return (
    <section className={`card ${props.data.intention === '1' ? 'card__darkmode' : ''}`}>
      <div className='card__autor'>
        <img className='card__autor--image' src={props.data.image || user} alt='user' />
        <p className='card__autor--job'>{props.data.job || 'Alcalde de Townsville'}</p>
        <p className='card__autor--name'>{props.data.autor || 'El Alcalde'}</p>
      </div>
      <div className='card__infoProject'>
        <p className='card__infoProject--subtitle'>Proyecto para Townsville</p>
        <hr className='line' />

        <h2 className='card__infoProject--title'>{props.data.name || 'Nombre del proyecto'}</h2>
        <p className='card__infoProject--slogan'>{props.data.slogan || 'Ayudando a nuestra ciudad'}</p>
        <p className='card__infoProject--desc'>
          {props.data.desc ||
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!'}
        </p>
        <div className='card__technologies'>
          <p className='card__technologies--text'>{props.data.type || 'Tipo de proyecto'}</p>
          <p className='card__technologies--text'>{props.data.budget ? `$ ${props.data.budget}` : '$9999'}</p>
          <div className='card__technologies--icons'>
            <a href={props.data.link} className='icons__link' target='_blank' rel='noreferrer'>
              <i className='fa-solid fa-globe card__technologies--globe'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewCard;
