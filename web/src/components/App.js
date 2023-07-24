import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpg';
import ls from '../services/localStorage';
import { Route, Routes } from 'react-router-dom';
import ProjectList from './ProjectList';
import Description from './Description';
import Landing from './Landing';
import objectApi from '../services/api';
import NotFound from './NotFound';

//Usar una variable objeto para todos los inputs

function App() {
  const [data, setData] = useState(
    ls.get('data', {
      name: '',
      slogan: '',
      budget: '',
      link: '',
      type: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: '',
      intention: ''
    })
  );

  const [projectList, setProjectList] = useState([]);

  const clearData = () => {
    setData({
      name: '',
      slogan: '',
      budget: '',
      link: '',
      type: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: '',
      intention: '',
    });
  };

  const handleChangeForm = (propName, value) => {
    const clonedData = { ...data, [propName]: value };
    setData(clonedData);
  };

  const [currentPage, setCurrentPage] = useState(0);

  const prevPage = () => {
        if (currentPage >= 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    objectApi.getApiProjects(currentPage)
      .then((data) => {
        if(data.info.next !== null) {
          setCurrentPage(currentPage + 1);
        }
      })
  };

  useEffect(() => {
    objectApi.getApiProjects(currentPage).then((data) => {
      const cleanData = data.results.map((eachProject) => ({
        id: eachProject.idproject,
        name: eachProject.nameProject,
        slogan: eachProject.sloganProject,
        budget: eachProject.budgetProject,
        link: eachProject.URLProject,
        type: eachProject.typeProject,
        desc: eachProject.descProject,
        autor: eachProject.nameAuthor,
        job: eachProject.jobAuthor,
        image: eachProject.imageProject,
        photo: eachProject.photoAuthor,
        intention: eachProject.intentionAuthor,
      }));
      setProjectList(cleanData);
    });

    // clean data
  }, [currentPage]);

  return (
    <div className='container'>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/projects' element={<ProjectList projectList={projectList} currentPage={currentPage} prevPage={prevPage} nextPage={nextPage} />} />
          <Route
            path='/new-project'
            element={
              <section className='newproject'>
                <Header />
                <Description text={'Ver proyectos'} link={'/projects'} />
                <section className='mainContainer'>
                  <Preview image={user} data={data} />
                  <Form data={data} handleChangeForm={handleChangeForm} clearData={clearData} />
                </section>
              </section>
            }
          ></Route>
          <Route path='*' element={<NotFound text={'Volver'} link={'/'} />} />
        </Routes>
      </main>
      <Footer logo={logo} />
    </div>
  );
}

export default App;
