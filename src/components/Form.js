import '../styles/layout/Form.scss';
import { useState, useEffect } from 'react';
import GetAvatar from './GetAvatar';
import callToApi from '../services/api';
import ls from '../services/localStorage';

const Form = (props) => {
  const [message, setMessage] = useState();

  const handleInput = (ev) => {
    props.handleChangeForm(ev.target.id, ev.target.value);
  };

  const handleImage = (fichero) => {
    props.handleChangeForm('image', fichero);
  };

  const handlePhoto = (fichero) => {
    props.handleChangeForm('photo', fichero);
  };

  const renderMsgSuccess = (dataAPI) => {
    return (
      <>
        <span className='form__card--success'> La tarjeta ha sido creada: </span>
        <a href={dataAPI.cardURL} className='success__link' target='_blank' rel='noreferrer'>
          {dataAPI.cardURL}
        </a>
      </>
    );
  };

  const renderMsgError = () => {
    return (
      <span className='form__card--error'>
        Ha habido un error al crear la tarjeta. Compruebe que todos los campos están rellenos
      </span>
    );
  };

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    callToApi(props.data).then((dataAPI) => {
      if (dataAPI.success) {
        setMessage(renderMsgSuccess(dataAPI));
      } else {
        setMessage(renderMsgError(dataAPI));
      }
    });
  };

  useEffect(() => {
    ls.set('data', {
      name: props.data.name,
      slogan: props.data.slogan,
      budget: props.data.budget,
      link: props.data.link,
      type: props.data.type,
      desc: props.data.desc,
      autor: props.data.autor,
      job: props.data.job,
      image: props.data.image,
      photo: props.data.photo,
      intention: props.data.intention
    });
  }, [props.data]);

  const handleClearForm = (ev) => {
    ev.preventDefault();
    ls.clear();
    props.clearData();
  };

  return (
    <form className='form'>
      <h2 className='form__title'>Información</h2>
      <section className='form__ask-info'>
        <p className='subtitle'>Cuéntanos sobre el proyecto</p>
        <hr className='line' />
      </section>
      <fieldset className='form__project'>
        <input
          className='form__project--input'
          type='text'
          placeholder='Nombre del proyecto'
          name='name'
          id='name'
          value={props.data.name}
          onInput={handleInput}
        />
        <input
          className='form__project--input'
          type='text'
          name='slogan'
          id='slogan'
          placeholder='Slogan'
          value={props.data.slogan}
          onInput={handleInput}
        />
        <section className='form__project--container'>
          {/* budget & URL */}
          <input
            className='form__project--input budget'
            type='number'
            name='budget'
            id='budget'
            placeholder='Presupuesto'
            value={props.data.budget}
            onInput={handleInput}
          />
          <input
            className='form__project--input link'
            type='text'
            placeholder='Enlace'
            name='link'
            id='link'
            value={props.data.link}
            onInput={handleInput}
          />
        </section>
        <select className='form__project--select' defaultValue='' name='type' id='type' onChange={handleInput}>
          <option hidden value=''>Selecciona un tipo de proyecto</option>
          <option value='Ciencia'>Ciencia</option>
          <option value='Cultura'>Cultura</option>
          <option value='Infraestructura'>Infraestructura</option>
          <option value='Parques'>Parques y jardines</option>
          <option value='Sanidad'>Sanidad</option>
          <option value='Tecnologia'>Tecnología</option>
        </select>
        <textarea
          className='form__project--textarea'
          type='text'
          placeholder='Descripción'
          name='desc'
          id='desc'
          value={props.data.desc}
          onInput={handleInput}
        ></textarea>
        <GetAvatar text='Subir foto de proyecto' avatar={props.data.photo} updateAvatar={handlePhoto} />
      </fieldset>
      <section className='form__ask-info autor'>
        <p className='subtitle'>Cuéntanos sobre la autora</p>
        <hr className='line' />
      </section>

      <fieldset className='form__autor'>
        <input
          className='form__autor--input'
          type='text'
          placeholder='Nombre'
          name='autor'
          id='autor'
          value={props.data.autor}
          onInput={handleInput}
        />
        <input
          className='form__autor--input'
          type='text'
          placeholder='Trabajo'
          name='job'
          id='job'
          value={props.data.job}
          onInput={handleInput}
        />
        <label className='form__autor--label' htmlFor="intention">¿Tu proyecto tiene intenciones malignas para la ciudad?</label>
        <select className='form__autor--select' defaultValue='' name="intention" id="intention" onChange={handleInput}>
          <option hidden value="">Marca una de las opciones</option>
          <option value="yes">Sí</option>
          <option value="no">No</option>
        </select>
        <GetAvatar text='Subir foto de autora' avatar={props.data.image} updateAvatar={handleImage} />
      </fieldset>
      <section className='form__submit'>
        <button className='form__submit-reset' onClick={handleClearForm}>
          Borrar todo
        </button>
        <button className='form__submit-large' onClick={handleClickCreateCard}>
          Crear Tarjeta
        </button>
      </section>

      <section className='form__card'>{message}</section>
    </form>
  );
};

export default Form;
