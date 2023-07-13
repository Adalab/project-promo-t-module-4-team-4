import user from '../images/user.jpg';
import '../styles/layout/ProjectListCard.scss';

const ProjectListCard = ({ eachLi }) => {
  return (
    <>
      <div className='plcard__autor'>
        <div
          className='plcard__autor--image'
          style={{ backgroundImage: `url(${eachLi.photo || user})` }}
          alt='user'
        ></div>
        <p className='plcard__autor--job'>
          {eachLi.job || 'Full Stack Developer'}
        </p>
        <p className='plcard__autor--name'>
          {eachLi.autor || 'Emmelie Björklund'}
        </p>
      </div>
      <div className='plcard__infoProject'>
        <p className='plcard__infoProject--subtitle'>Personal Project Card</p>
        <hr className='line' />
        <h2 className='plcard__infoProject--title'>
          {eachLi.name || 'Elegant Workspace'}
        </h2>
        <p className='plcard__infoProject--slogan'>
          {eachLi.slogan || 'Diseños Exclusivos'}
        </p>
        <p className='plcard__infoProject--desc'>
          {eachLi.desc ||
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!'}
        </p>
        <div className='plcard__technologies'>
          <p className='plcard__technologies--text'>
            {eachLi.type || 'Infraestructura'}
          </p>
          <p className='card__technologies--text'>
            {'$ ' + eachLi.budget || '$9999'}
          </p>
          <div className='plcard__technologies--icons'>
            <a
              href={eachLi.link}
              className='icons__link'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa-solid fa-globe plcard__technologies--globe'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectListCard;
