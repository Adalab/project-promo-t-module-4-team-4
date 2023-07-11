import ProjectListCard from './ProjectListCard';
import '../styles/layout/ProjectList.scss';
import Description from './Description';

const ProjectList = () => {
  return (
    <>
    <Description text={'Nuevo proyecto'} link={'/new-project'} />
    <ul className='project__list'>
      <ProjectListCard />
      <ProjectListCard />
      <ProjectListCard />
      <ProjectListCard />
    </ul>
    </>
    
  );
}

export default ProjectList;