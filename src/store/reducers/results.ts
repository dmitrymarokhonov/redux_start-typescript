import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: []
};

const deleteResult = (state:any, action:any) => {
  const updatedArray = state.results.filter((result:any) => result.id !== action.resultElId);
  return updateObject(state, { results: updatedArray });
};

const resultsReducer = (state:any = initialState, action:any) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result })
      });
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default resultsReducer;