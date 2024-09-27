import construction2 from '../assets/img/construction2.jpg';
import PropTypes from 'prop-types';

export const Constructions2 = ({className}) => {
  return (
    <img src={construction2} alt="construction2"
    className={className}/>
  )
}

Constructions2.propTypes={
    className: PropTypes.string,  
}