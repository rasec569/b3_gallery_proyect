import construction4 from '../assets/img/construction4.jpg';
import PropTypes from 'prop-types';

export const Constructions4 = ({className}) => {
  return (
    <img src={construction4} alt="construction4"
    className={className}/>
  )
}

Constructions4.propTypes={
    className: PropTypes.string,  
}