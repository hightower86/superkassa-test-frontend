import { BUTTON_PRESS, STATE_ERROR } from './types';
import firebase from '../../firebase';

export const pressButton = () => async dispatch => {
  try {
    const db = firebase.firestore();
    const data = await db.collection('button_state').get();
    const bState = data.docs[0].data().state;
    console.log('hey', bState);
    dispatch({
      type: BUTTON_PRESS,
      payload: !bState
    });
  } catch (error) {
    console.log('hey', 'ERROR');
    dispatch({
      type: STATE_ERROR,
      payload: 'ERROR'
    });
  }
};
