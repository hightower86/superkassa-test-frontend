import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/button';
import firebase from './firebase';

const getButtonState = async () => {
  const db = firebase.firestore();
  const data = await db.collection('button_state').get();
  return data.docs[0].data().state;
  //console.log();
};

const App = () => {
  const [buttonState, setButtonState] = useState(false);

  return (
    <div className='container'>
      <Button
        btnState={buttonState}
        setBtnState={() => setButtonState(!buttonState)}
      />
    </div>
  );
};

export default App;
