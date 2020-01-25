import { BUTTON_PRESS, STATE_ERROR } from '../actions/types.js';
import firebase from '../../firebase';

const fetchData = async () => {
  try {
    const db = firebase.firestore();
    const data = await db.collection('button_state').get();
    return data.docs[0].data().state;
  } catch (error) {
    return false;
  }
};

const initialState = {
  keyOn: fetchData()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_PRESS:
      return {
        ...state,
        keyOn: action.payload
      };
    case STATE_ERROR:
      return {
        ...state,
        keyOn: 'false'
      };

    default:
      return state;
  }
};
