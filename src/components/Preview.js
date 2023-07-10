import '../styles/layout/Preview.scss';
import image from '../images/cover.jpeg';
import user from '../images/user.jpg';
import PreviewCard from './PreviewCard';

const Preview = (props) => {
  return (
    <section className='preview'>
      <div className='preview__imageContainer' style={{ backgroundImage: `url(${props.data.photo || image})` }}></div>
      <PreviewCard data={props.data} />
    </section>
  );
};

export default Preview;
