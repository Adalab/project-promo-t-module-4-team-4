import ProjectListCard from './ProjectListCard';
import '../styles/layout/ProjectList.scss';
import Description from './Description';
import Header from './Header';
import Pagination from './Pagination';
import logo from '../images/logo-adalab.png';

const ProjectList = ({ projectList, currentPage, prevPage, nextPage }) => {
  const projectsLi = projectList.map((eachLi) => (
    <li key={eachLi.id} className='plcard'>
      <ProjectListCard eachLi={eachLi} />
    </li>
  ));
  return (
    <>
    <Header logo={logo} padding={'padding'}/>
      <Description text={'Nuevo proyecto'} link={'/new-project'} />
      <ul className='project__list'>{projectsLi}</ul>
      <Pagination currentPage={currentPage} prevPage={prevPage} nextPage={nextPage} projectList={projectList}/>
    </>
  );
};

export default ProjectList;
