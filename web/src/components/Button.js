import { Link } from 'react-router-dom';


const Button = ( {text, link} ) => {
  return (
    <Link to={link}>
      <button className="description__button">{text}</button>
    </Link>
  );
};

export default Button;
