import ProjectListCard from './ProjectListCard';
import '../styles/layout/ProjectList.scss';
import Description from './Description';
import Header from './Header';
import logo from '../images/logo-adalab.png';

const ProjectList = ({ projectList }) => {
  const projectsLi = projectList.map((eachLi) => (
    <li key={eachLi.id} className='plcard'>
      <ProjectListCard eachLi={eachLi} />
    </li>
  ));
  return (
    <>
    <Header logo={logo} />
      <Description text={'Nuevo proyecto'} link={'/new-project'} />
      <ul className='project__list'>{projectsLi}</ul>
    </>
  );
};

export default ProjectList;
