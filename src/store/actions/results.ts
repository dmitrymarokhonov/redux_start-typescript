import * as actionTypes from "./actionTypes";
import { Action, ActionCreator } from "redux";

export const saveResult: ActionCreator<Action> = (res:number) => {
    const updatedResult = res;
  return {
    type: actionTypes.STORE_RESULT,
    result: updatedResult
  };
};

export const storeResult = (res:number) => {
  return (dispatch:any, getState:any) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);
      dispatch(saveResult(res));
    }, 1000);
  };
};

export const deleteResult:ActionCreator<Action> = (id:string) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: id
  };
};