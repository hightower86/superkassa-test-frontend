import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/button';
import firebase from './firebase';

const App = () => {
  const [buttonState, setButtonState] = useState(false);

  // subscribe to changing buttonState
  useEffect(() => {
    const db = firebase.firestore();
    return db.collection('button_state').onSnapshot(snapshot => {
      const newBtnState = snapshot.docs[0].data().state;
      setButtonState(newBtnState);
    });
  }, []);

  const toggleBtnState = bState => {
    const db = firebase.firestore();
    db.collection('button_state')
      .doc('3Z1xgTerPzvx4ErUz9la')
      .set({ state: bState });
  };

  return (
    <div className='container'>
      <Button btnState={buttonState} setBtnState={toggleBtnState} />
    </div>
  );
};

export default App;
