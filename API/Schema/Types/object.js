import { ValidateMessage, isValueTruth, isValueValid } from "../helpers/index.js";

export const ObjectCheck = function(value, fields) {
  let obj = {};
  const keys = Object.keys(fields);
   keys.forEach(key => obj = {...obj, [key]: fields[key].rule(value[key]) })
   return obj
  };
