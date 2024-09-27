import construction1 from '../assets/img/construction1.jpg';
import PropTypes from 'prop-types';

export const Constructions1 = ({className}) => {
  return (
    <img src={construction1} alt="construction1"
    className={className}/>
  )
}

Constructions1.propTypes={
    className: PropTypes.string,  
}