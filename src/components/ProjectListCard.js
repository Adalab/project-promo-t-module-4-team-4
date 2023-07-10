import user from '../images/user.jpg';
import '../styles/layout/ProjectListCard.scss';

const ProjectListCard = (props) => {
  return (
    <li className='plcard'>
      <div className='plcard__autor'>
        <img className='plcard__autor--image' src={props.data.image || user} alt='user' />
        <p className='plcard__autor--job'>{props.data.job || 'Full Stack Developer'}</p>
        <p className='plcard__autor--name'>{props.data.autor || 'Emmelie Björklund'}</p>
      </div>
      <div className='plcard__infoProject'>
        <p className='plcard__infoProject--subtitle'>Personal Project Card</p>
        <hr className='line' />
        <h2 className='plcard__infoProject--title'>{props.data.name || 'Elegant Workspace'}</h2>
        <p className='plcard__infoProject--slogan'>{props.data.slogan || 'Diseños Exclusivos'}</p>
        <p className='plcard__infoProject--desc'>
          {props.data.desc ||
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!'}
        </p>
        <div className='plcard__technologies'>
          <p className='plcard__technologies--text'>{props.data.technologies || 'React JS, MongoDB'}</p>
          <div className='plcard__technologies--icons'>
            <a href={props.data.demo} className='icons__link' target='_blank' rel='noreferrer'>
              <i className='fa-solid fa-globe plcard__technologies--globe'></i>
            </a>
            <a href={props.data.repo} className='icons__link' target='_blank' rel='noreferrer'>
              <i className='fa-brands fa-github plcard__technologies--github'></i>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectListCard;
