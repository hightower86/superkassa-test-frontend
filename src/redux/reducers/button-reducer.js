import { BUTTON_PRESS } from '../actions/types.js';

const initialState = {
  keyOn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_PRESS:
      return {
        ...state,
        keyOn: !state.keyOn
      };

    default:
      return state;
  }
};
