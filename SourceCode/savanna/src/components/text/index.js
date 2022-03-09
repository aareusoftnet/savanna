import React from "react";

import { Text as RNText } from "react-native";
import { AppStyles } from "../../constants";

import PropTypes from "prop-types";

const Text = (props) => {
  const {
    fontStyle,
    marginStart,
    marginTop,
    marginEnd,
    marginBottom,
    marginHorizontal,
    marginVertical,
    paddingStart,
    paddingTop,
    paddingEnd,
    paddingBottom,
    paddingHorizontal,
    paddingVertical,
    alignSelf,
    textAlign,
    width,
    height,
    color,
    backgroundColor,
    numberOfLines,
    style,
    children,
    onTextPress,
    onLongTextPress,
  } = props;

  const newStyle = [style];
  if (fontStyle) {
    newStyle.push(fontStyle);
  }
  if (marginStart) {
    newStyle.push({ marginStart: marginStart });
  }
  if (marginTop) {
    newStyle.push({ marginTop: marginTop });
  }
  if (marginEnd) {
    newStyle.push({ marginEnd: marginEnd });
  }
  if (marginBottom) {
    newStyle.push({ marginBottom: marginBottom });
  }
  if (marginHorizontal) {
    newStyle.push({ marginHorizontal: marginHorizontal });
  }
  if (marginVertical) {
    newStyle.push({ marginVertical: marginVertical });
  }
  if (paddingStart) {
    newStyle.push({ paddingStart: paddingStart });
  }
  if (paddingTop) {
    newStyle.push({ paddingTop: paddingTop });
  }
  if (paddingEnd) {
    newStyle.push({ paddingEnd: paddingEnd });
  }
  if (paddingBottom) {
    newStyle.push({ paddingBottom: paddingBottom });
  }
  if (paddingHorizontal) {
    newStyle.push({ paddingHorizontal: paddingHorizontal });
  }
  if (paddingVertical) {
    newStyle.push({ paddingVertical: paddingVertical });
  }
  if (paddingHorizontal) {
    newStyle.push({ paddingHorizontal: paddingHorizontal });
  }
  if (paddingVertical) {
    newStyle.push({ paddingVertical: paddingVertical });
  }
  if (alignSelf) {
    newStyle.push({ alignSelf: alignSelf });
  }
  if (textAlign) {
    newStyle.push({ textAlign: textAlign });
  }
  if (width) {
    newStyle.push({ width: width });
  }
  if (height) {
    newStyle.push({ height: height });
  }
  if (color) {
    newStyle.push({ color: color });
  }
  if (backgroundColor) {
    newStyle.push({ backgroundColor: backgroundColor });
  }

  if (onTextPress) {
    return (
      <RNText
        style={newStyle}
        numberOfLines={numberOfLines}
        suppressHighlighting={true}
        onPress={() => onTextPress()}
      >
        {children}
      </RNText>
    );
  } else if (onLongTextPress) {
    return (
      <RNText
        style={newStyle}
        numberOfLines={numberOfLines}
        suppressHighlighting={true}
        onLongPress={() => onLongTextPress()}
      >
        {children}
      </RNText>
    );
  } else {
    return (
      <RNText style={newStyle} numberOfLines={numberOfLines}>
        {children}
      </RNText>
    );
  }
};

Text.propTypes = {
  fontStyle: PropTypes.object,
  marginStart: PropTypes.any,
  marginTop: PropTypes.any,
  marginEnd: PropTypes.any,
  marginBottom: PropTypes.any,
  marginHorizontal: PropTypes.any,
  marginVertical: PropTypes.any,
  paddingStart: PropTypes.any,
  paddingTop: PropTypes.any,
  paddingEnd: PropTypes.any,
  paddingBottom: PropTypes.any,
  paddingHorizontal: PropTypes.any,
  paddingVertical: PropTypes.any,
  alignSelf: PropTypes.oneOf([
    AppStyles.FlexAlignType.flexStart,
    AppStyles.FlexAlignType.flexEnd,
    AppStyles.FlexAlignType.center,
    AppStyles.FlexAlignType.stretch,
    AppStyles.FlexAlignType.baseline,
  ]),
  textAlign: PropTypes.oneOf([
    AppStyles.TextAlign.auto,
    AppStyles.TextAlign.center,
    AppStyles.TextAlign.justify,
    AppStyles.TextAlign.left,
    AppStyles.TextAlign.right,
  ]),
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  numberOfLines: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node,
  onTextPress: PropTypes.func,
  onLongTextPress: PropTypes.func,
};

export default Text;
