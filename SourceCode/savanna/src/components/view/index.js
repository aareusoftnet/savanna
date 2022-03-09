import React from 'react';

import { View as NativeView } from 'react-native';
import { AppStyles } from '../../constants';

import PropTypes from 'prop-types';
import styles from './styles';

const View = (props) => {
  const {
    position,
    flex,
    flexDirection,
    flexWrap,
    alignContent,
    alignItems,
    alignSelf,
    justifyContent,
    start,
    top,
    end,
    bottom,
    marginStart,
    marginEnd,
    marginTop,
    marginBottom,
    marginHorizontal,
    marginVertical,
    paddingStart,
    paddingEnd,
    paddingTop,
    paddingBottom,
    paddingHorizontal,
    paddingVertical,
    height,
    width,
    overflow,
    borderRadius,
    borderColor,
    borderWidth,
    backgroundColor,
    style,
    children,
  } = props;

  const newStyle = style ? [styles.default, style] : [styles.default];
  if (flex) {
    newStyle.push({ flex: flex });
  }
  if (flexDirection) {
    newStyle.push({ flexDirection: flexDirection });
  }
  if (flexWrap) {
    newStyle.push({ flexWrap: flexWrap });
  }
  if (alignContent) {
    newStyle.push({ alignContent: alignContent });
  }
  if (alignItems) {
    newStyle.push({ alignItems: alignItems });
  }
  if (alignSelf) {
    newStyle.push({ alignSelf: alignSelf });
  }
  if (justifyContent) {
    newStyle.push({ justifyContent: justifyContent });
  }
  if (position) {
    newStyle.push({ position: position });
  }
  if (start !== undefined || start !== null) {
    newStyle.push({ start: start });
  }
  if (top !== undefined || top !== null) {
    newStyle.push({ top: top });
  }
  if (end !== undefined || end !== null) {
    newStyle.push({ end: end });
  }
  if (bottom !== undefined || bottom !== null) {
    newStyle.push({ bottom: bottom });
  }
  if (marginStart !== undefined || marginStart !== null) {
    newStyle.push({ marginStart: marginStart });
  }
  if (marginEnd !== undefined || marginEnd !== null) {
    newStyle.push({ marginEnd: marginEnd });
  }
  if (marginTop !== undefined || marginTop !== null) {
    newStyle.push({ marginTop: marginTop });
  }
  if (marginBottom !== undefined || marginBottom !== null) {
    newStyle.push({ marginBottom: marginBottom });
  }
  if (marginHorizontal !== undefined || marginHorizontal !== null) {
    newStyle.push({ marginHorizontal: marginHorizontal });
  }
  if (marginVertical !== undefined || marginVertical !== null) {
    newStyle.push({ marginVertical: marginVertical });
  }
  if (paddingStart !== undefined || paddingStart !== null) {
    newStyle.push({ paddingStart: paddingStart });
  }
  if (paddingEnd !== undefined || paddingEnd !== null) {
    newStyle.push({ paddingEnd: paddingEnd });
  }
  if (paddingTop !== undefined || paddingTop !== null) {
    newStyle.push({ paddingTop: paddingTop });
  }
  if (paddingBottom !== undefined || paddingBottom !== null) {
    newStyle.push({ paddingBottom: paddingBottom });
  }
  if (paddingHorizontal !== undefined || paddingHorizontal !== null) {
    newStyle.push({ paddingHorizontal: paddingHorizontal });
  }
  if (paddingVertical !== undefined || paddingVertical !== null) {
    newStyle.push({ paddingVertical: paddingVertical });
  }
  if (height) {
    newStyle.push({ height: height });
  }
  if (width) {
    newStyle.push({ width: width });
  }
  if (overflow) {
    newStyle.push({ overflow: overflow });
  }
  if (borderRadius) {
    newStyle.push({ borderRadius: borderRadius });
  }
  if (borderColor) {
    newStyle.push({ borderColor: borderColor });
  }
  if (borderWidth) {
    newStyle.push({ borderWidth: borderWidth });
  }
  if (backgroundColor) {
    newStyle.push({ backgroundColor: backgroundColor });
  }
  return <NativeView style={newStyle}>{children}</NativeView>;
};

View.propTypes = {
  flex: PropTypes.number,
  flexDirection: PropTypes.oneOf([
    AppStyles.FlexDirection.column,
    AppStyles.FlexDirection.columnReverse,
    AppStyles.FlexDirection.row,
    AppStyles.FlexDirection.rowReverse,
  ]),
  flexWrap: PropTypes.oneOf([
    AppStyles.FlexWrap.nowrap,
    AppStyles.FlexWrap.wrap,
    AppStyles.FlexWrap.wrapReverse,
  ]),
  alignContent: PropTypes.oneOf([
    AppStyles.FlexAlignType.center,
    AppStyles.FlexAlignType.flexEnd,
    AppStyles.FlexAlignType.flexStart,
    AppStyles.FlexAlignType.stretch,
    AppStyles.FlexAlignType.spaceAround,
    AppStyles.FlexAlignType.spaceBetween,
  ]),
  alignItems: PropTypes.oneOf([
    AppStyles.FlexAlignType.baseline,
    AppStyles.FlexAlignType.center,
    AppStyles.FlexAlignType.flexEnd,
    AppStyles.FlexAlignType.flexStart,
    AppStyles.FlexAlignType.stretch,
  ]),
  alignSelf: PropTypes.oneOf([
    AppStyles.FlexAlignType.auto,
    AppStyles.FlexAlignType.baseline,
    AppStyles.FlexAlignType.center,
    AppStyles.FlexAlignType.flexEnd,
    AppStyles.FlexAlignType.flexStart,
    AppStyles.FlexAlignType.stretch,
  ]),
  justifyContent: PropTypes.oneOf([
    AppStyles.FlexAlignType.center,
    AppStyles.FlexAlignType.flexEnd,
    AppStyles.FlexAlignType.flexStart,
    AppStyles.FlexAlignType.spaceAround,
    AppStyles.FlexAlignType.spaceBetween,
    AppStyles.FlexAlignType.spaceEvenly,
  ]),
  position: PropTypes.string,
  start: PropTypes.any,
  top: PropTypes.any,
  end: PropTypes.any,
  bottom: PropTypes.any,
  marginStart: PropTypes.any,
  marginEnd: PropTypes.any,
  marginTop: PropTypes.any,
  marginBottom: PropTypes.any,
  marginHorizontal: PropTypes.any,
  marginVertical: PropTypes.any,
  paddingStart: PropTypes.any,
  paddingEnd: PropTypes.any,
  paddingTop: PropTypes.any,
  paddingBottom: PropTypes.any,
  paddingHorizontal: PropTypes.any,
  paddingVertical: PropTypes.any,
  height: PropTypes.any,
  width: PropTypes.any,
  overflow: PropTypes.oneOf([
    AppStyles.OverFlow.hidden,
    AppStyles.OverFlow.scroll,
    AppStyles.OverFlow.visible,
  ]),
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

View.defaultProps = {};

export default View;
