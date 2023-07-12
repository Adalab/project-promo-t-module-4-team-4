import ProjectListCard from './ProjectListCard';
import '../styles/layout/ProjectList.scss';
import Description from './Description';

const ProjectList = ({ projectList }) => {
  const projectsLi = projectList.map((eachLi) => (
    <li key={eachLi.id} className='plcard'>
      <ProjectListCard eachLi={eachLi} />
    </li>
  ));
  return (
    <>
      <Description text={'Nuevo proyecto'} link={'/new-project'} />
      <ul className='project__list'>{projectsLi}</ul>
    </>
  );
};

export default ProjectList;
