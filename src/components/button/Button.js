import React from 'react';
import './button.css';
import { connect } from 'react-redux';
import { pressButton } from '../../redux/actions/button-actions';

const Button = ({ keyOn, pressButton }) => {
  //const [keyState, setKeyState] = useState(keyOn);
  //const state = 'OFF';
  console.log(keyOn);
  return (
    <div onClick={pressButton} className='btn'>
      {keyOn ? 'ON' : 'OFF'}
    </div>
  );
};

const mapStateToProps = state => ({
  keyOn: state.buttonReducer.keyOn
});

export default connect(mapStateToProps, { pressButton })(Button);
