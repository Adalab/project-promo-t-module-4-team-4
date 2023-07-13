import '../styles/layout/Preview.scss';
import image from '../images/cover-townsville.webp';
import PreviewCard from './PreviewCard';

const Preview = (props) => {
  return (
    <section className='preview'>
      <div className={`preview__imageContainer ${props.data.intention === '1' ? 'preview__imageContainer-dark' : ''}`} style={{ backgroundImage: `url(${props.data.photo || image})` }}></div>
      <PreviewCard data={props.data} />
    </section>
  );
};

export default Preview;
