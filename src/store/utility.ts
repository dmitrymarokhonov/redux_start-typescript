import {InnerState} from "../types"



export const updateObject = (oldObject: InnerState, updatedValues: InnerState) => {
  console.log("oldObject");
  console.log(oldObject);
  console.log("updatedValues");
  console.log(updatedValues);


  return {
    ...oldObject,
    ...updatedValues
  };
};
