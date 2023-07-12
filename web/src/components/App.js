import '../styles/App.scss';
import { useState } from 'react';
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

//Usar una variable objeto para todos los inputs

function App() {
  const [data, setData] = useState(
    ls.get('data', {
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: '',
    })
  );

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

  return (
    <div className='container'>
      <Header logo={logo} />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/projects' element={<ProjectList data={data} />} />
          <Route
            path='/new-project'
            element={
              <>
              <Description text={'Ver proyectos'} link={'/projects'}/>
              <section className='mainContainer'>
                <Preview image={user} data={data} />
                <Form data={data} handleChangeForm={handleChangeForm} clearData={clearData} />
              </section>
              </>
              
            }
          ></Route>
        </Routes>
      </main>
      <Footer logo={logo} />
    </div>
  );
}

export default App;
