import React from 'react';
import './App.css';
import Button from './components/button';
import firebase from './firebase';

const App = () => {
  const onFetch = async () => {
    const db = firebase.firestore();
    const data = await db.collection('button_state').get();
    console.log(data.docs[0].data().state);
  };

  return (
    <div className='container'>
      {/* <button
        onClick={() => onFetch()}
        style={{ padding: '2rem', margin: '2rem' }}
      >
        fetch
      </button> */}
      <Button />
    </div>
  );
};

export default App;
