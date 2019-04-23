import * as actionTypes from "./actionTypes";

export const saveResult = (res:number) => {
    const updatedResult = res;
  return {
    type: actionTypes.STORE_RESULT,
    result: updatedResult
  };
};
export const storeResult = (res:any) => {
  return (dispatch:any, getState:any) => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 1000);
  };
};
export const deleteResult = (id:string) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: id
  };
};