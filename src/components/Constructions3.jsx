import construction3 from '../assets/img/construction3.jpg';
import PropTypes from 'prop-types';

export const Constructions3 = ({className}) => {
  return (
    <img src={construction3} alt="construction3"
    className={className}/>
  )
}

Constructions3.propTypes={
    className: PropTypes.string,  
}