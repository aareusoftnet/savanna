import moment from "moment";

import { Dimensions } from "react-native";

export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;

export const RegEx = {
  name: RegExp("^([^\\x00-\\x7F]|[\\w_\\ \\.\\+\\-]){2,50}$"),
};

export const isEmpty = (object) => {
  if (object === undefined) {
    return true;
  } else if (object === null) {
    return true;
  } else if (object instanceof Array) {
    return object === undefined || object.length === 0;
  } else if (typeof object === "string") {
    return object.toString().trim().length === 0;
  } else if (object instanceof Object) {
    return Object.keys(object).length === 0;
  } else {
    return false;
  }
};

export const readableDateInString = (string) => {
  return moment.utc(string).local().format("Do of MMMM YYYY");
};
