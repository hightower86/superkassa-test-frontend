import React from 'react';
import './button.css';
//import { connect } from 'react-redux';
//import { pressButton } from '../../redux/actions/button-actions';

const Button = ({ btnState, setBtnState }) => {
  console.log(btnState);
  return (
    <div onClick={setBtnState} className={`btn ${btnState ? 'pressed' : ''}`}>
      {btnState ? 'ON' : 'OFF'}
    </div>
  );
};

export default Button;

// const mapStateToProps = state => ({
//   keyOn: state.buttonReducer.keyOn
// });

//export default connect(mapStateToProps, { pressButton })(Button);
