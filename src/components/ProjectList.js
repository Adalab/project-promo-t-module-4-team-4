import { Link } from 'react-router-dom';
import ProjectListCard from './ProjectListCard';
import '../styles/layout/ProjectList.scss';

const ProjectList = (props) => {
  return (
    <ul className='project__list'>
      <ProjectListCard data={props.data} />
      <ProjectListCard data={props.data} />
      <ProjectListCard data={props.data} />
      <ProjectListCard data={props.data} />
    </ul>
  );
}

export default ProjectList;