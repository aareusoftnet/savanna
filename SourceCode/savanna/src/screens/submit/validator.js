import React from "react";
import { AppStrings } from "../../constants";
import { AppHelper } from "../../utils";

const CheckInsInfoFieldsValidation = (checkInsInfo) => {
  let errors = [];
  if (AppHelper.isEmpty(checkInsInfo.value.name)) {
    checkInsInfo.isValidAllField = false;
    errors.push(AppStrings.tab1.form.error.name);
  } else if (AppHelper.RegEx.name.test(checkInsInfo.value.name) === false) {
    checkInsInfo.isValidAllField = false;
    errors.push(AppStrings.tab1.form.error.name);
  }
  if (AppHelper.isEmpty(checkInsInfo.value.comment)) {
    checkInsInfo.isValidAllField = false;
    errors.push(AppStrings.tab1.form.error.comment);
  }
  if (AppHelper.isEmpty(checkInsInfo.value.imageURL)) {
    checkInsInfo.isValidAllField = false;
    errors.push(AppStrings.tab1.form.error.imageURL);
  }
  if (AppHelper.isEmpty(errors) === false) {
    checkInsInfo.errorMessage = errors[0];
  } else {
    checkInsInfo.errorMessage = null;
    checkInsInfo.isValidAllField = true;
  }
  return checkInsInfo;
};

export default CheckInsInfoFieldsValidation;
