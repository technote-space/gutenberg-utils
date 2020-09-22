import {INC_INDEX} from './constant';

export default (state = {
  index: {},
}, action) => {
  switch (action.type) {
    case INC_INDEX: {
      const newState = Object.assign({}, state);
      if (action.name in newState.index) {
        newState.index[action.name]++;
      } else {
        newState.index[action.name] = 0;
      }
      return newState;
    }
    default:
      break;
  }
  return state;
};
