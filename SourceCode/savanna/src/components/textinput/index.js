import React from "react";

import { AppColors, AppFonts, AppStyles } from "../../constants";
import { TextInput as RNTextInput } from "react-native";

import PropTypes from "prop-types";
import styles from "./styles";
import View from "../view";

const AutoCapitalizeType = {
  characters: "characters",
  words: "words",
  sentences: "sentences",
  none: "none",
};

const AutoCompleteType = {
  ccCSC: "cc-csc",
  ccEXP: "cc-exp",
  ccEXPMonth: "cc-exp-month",
  ccEXPYear: "cc-exp-year",
  ccNumber: "cc-number",
  email: "email",
  name: "name",
  password: "password",
  postalCode: "postal-code",
  streetAddress: "street-address",
  tel: "tel",
  userName: "username",
  off: "off",
};

const KeyboardType = {
  default: "default",
  emailAddress: "email-address",
  numeric: "numeric",
  phonePad: "phone-pad",
  numberPad: "number-pad",
  decimalPad: "decimal-pad",
  asciiCapable: "ascii-capable",
  numbersAndPunctuation: "numbers-and-punctuation",
  url: "url",
  namePhonePad: "name-phone-pad",
  twitter: "twitter",
  webSearch: "web-search",
};

const ReturnKeyType = {
  done: "done",
  go: "go",
  next: "next",
  search: "search",
  send: "send",
};

const Component = (props) => {
  const {
    innerRef,
    flex,
    containerMarginStart,
    containerMarginTop,
    containerMarginEnd,
    containerMarginBottom,
    containerMarginHorizontal,
    containerMarginVertical,
    containerPaddingStart,
    containerPaddingTop,
    containerPaddingEnd,
    containerPaddingBottom,
    containerPaddingHorizontal,
    containerPaddingVertical,
    containerBorderColor,
    containerBorderWidth,
    containerBorderRadius,
    containerBackgroundColor,
    multiline,
    height,
    placeholder,
    placeholderTextColor,
    fontStyle,
    color,
    selectionColor,
    secureTextEntry,
    style,
    value,
    autoCapitalize,
    autoComplete,
    autoCorrect,
    autoFocus,
    keyboardType,
    returnKeyType,
    blurOnSubmit,
    onChangeText,
    onSubmitEditing,
  } = props;

  const newStyle = style ? [styles.default, style] : [styles.default];
  if (height) {
    newStyle.push({ height: height });
  }
  if (fontStyle) {
    newStyle.push(fontStyle);
  }
  if (color) {
    newStyle.push({ color: color });
  }

  const renderTextInputUIs = () => {
    return (
      <RNTextInput
        ref={innerRef}
        style={newStyle}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        selectionColor={selectionColor}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        blurOnSubmit={blurOnSubmit}
        onChangeText={(text) => onChangeText(text)}
        onSubmitEditing={() => onSubmitEditing && onSubmitEditing()}
      />
    );
  };

  return (
    <View
      flex={flex}
      marginStart={containerMarginStart}
      marginTop={containerMarginTop}
      marginEnd={containerMarginEnd}
      marginBottom={containerMarginBottom}
      marginHorizontal={containerMarginHorizontal}
      marginVertical={containerMarginVertical}
      paddingStart={containerPaddingStart}
      paddingTop={containerPaddingTop}
      paddingEnd={containerPaddingEnd}
      paddingBottom={containerPaddingBottom}
      paddingHorizontal={containerPaddingHorizontal}
      paddingVertical={containerPaddingVertical}
      backgroundColor={containerBackgroundColor}
      borderColor={containerBorderColor}
      borderWidth={containerBorderWidth}
      borderRadius={containerBorderRadius}
      flexDirection={AppStyles.FlexDirection.row}
      justifyContent={AppStyles.FlexAlignType.spaceBetween}
      alignItems={AppStyles.FlexAlignType.center}
    >
      {renderTextInputUIs()}
    </View>
  );
};

Component.propTypes = {
  innerRef: PropTypes.any,
  flex: PropTypes.number,
  containerMarginStart: PropTypes.any,
  containerMarginTop: PropTypes.any,
  containerMarginEnd: PropTypes.any,
  containerMarginBottom: PropTypes.any,
  containerMarginHorizontal: PropTypes.any,
  containerMarginVertical: PropTypes.any,
  containerPaddingStart: PropTypes.any,
  containerPaddingTop: PropTypes.any,
  containerPaddingEnd: PropTypes.any,
  containerPaddingBottom: PropTypes.any,
  containerPaddingHorizontal: PropTypes.any,
  containerPaddingVertical: PropTypes.any,
  containerBackgroundColor: PropTypes.string,
  containerBorderWidth: PropTypes.number,
  containerBorderColor: PropTypes.string,
  containerBorderRadius: PropTypes.number,
  multiline: PropTypes.bool,
  height: PropTypes.number,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  value: PropTypes.string,
  fontStyle: PropTypes.object,
  color: PropTypes.string,
  selectionColor: PropTypes.string,
  autoCapitalize: PropTypes.oneOf([
    AutoCapitalizeType.none,
    AutoCapitalizeType.characters,
    AutoCapitalizeType.words,
    AutoCapitalizeType.sentences,
  ]),
  autoComplete: PropTypes.oneOf([
    AutoCompleteType.ccCSC,
    AutoCompleteType.ccEXP,
    AutoCompleteType.ccEXPMonth,
    AutoCompleteType.ccEXPYear,
    AutoCompleteType.ccNumber,
    AutoCompleteType.email,
    AutoCompleteType.name,
    AutoCompleteType.off,
    AutoCompleteType.password,
    AutoCompleteType.postalCode,
    AutoCompleteType.streetAddress,
    AutoCompleteType.tel,
    AutoCompleteType.userName,
  ]),
  autoCorrect: PropTypes.bool,
  autoFocus: PropTypes.bool,
  keyboardType: PropTypes.oneOf([
    KeyboardType.default,
    KeyboardType.asciiCapable,
    KeyboardType.emailAddress,
    KeyboardType.namePhonePad,
    KeyboardType.numberPad,
    KeyboardType.numbersAndPunctuation,
    KeyboardType.numeric,
    KeyboardType.phonePad,
    KeyboardType.twitter,
    KeyboardType.url,
    KeyboardType.webSearch,
  ]),
  returnKeyType: PropTypes.oneOf([
    ReturnKeyType.done,
    ReturnKeyType.go,
    ReturnKeyType.next,
    ReturnKeyType.search,
    ReturnKeyType.send,
  ]),
  blurOnSubmit: PropTypes.bool,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
};

Component.defaultProps = {
  containerPaddingHorizontal: 12,
  containerBackgroundColor: AppColors.appFFFFFF,
  containerBorderWidth: 1,
  containerBorderColor: AppColors.appD2D2D2,
  containerBorderRadius: 8,
  multiline: false,
  secureTextEntry: false,
  height: 50,
  placeholderTextColor: AppColors.app9B9DA7,
  blurOnSubmit: true,
  selectionColor: AppColors.app000000,
  fontStyle: AppStyles.FontStyles.regular(16, AppFonts.nunito.regular),
  color: AppColors.app23272E,
};

export {
  Component,
  AutoCapitalizeType,
  AutoCompleteType,
  KeyboardType,
  ReturnKeyType,
};
