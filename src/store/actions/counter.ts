import * as actionTypes from "./actionTypes";
import { ActionCreator, Action } from "redux";

export const increment: ActionCreator<Action> = () => {
    return {
      type: actionTypes.INCREMENT
    };
  };
  export const decrement: ActionCreator<Action> = () => {
    return {
      type: actionTypes.DECREMENT
    };
  };
  export const add: ActionCreator<Action> = (val:number) => {
    return {
      type: actionTypes.ADD,
      value: val
    };
  };
  export const subtract: ActionCreator<Action> = (val:number) => {
    return {
      type: actionTypes.SUBTRACT,
      value: val
    };
  };