import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
    return updateObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.value });
    // return { ...state, counter: state.counter + action.value };
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.value });
    // return { ...state, counter: state.counter - action.value };
    case actionTypes.STORE_RESULT:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export default counterReducer;