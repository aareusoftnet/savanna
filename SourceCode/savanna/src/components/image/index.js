import React from 'react';

import { Image as RNImage } from 'react-native';
import { AppStyles } from '../../constants';

import PropTypes from 'prop-types';
import styles from './styles';

const Image = (props) => {
  const {
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
    borderRadius,
    alignSelf,
    source,
    resizeMode,
    height,
    width,
    tintColor,
    backgroundColor,
    style,
  } = props;

  const newStyle = style ? [styles.default, style] : [styles.default];
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
  if (borderRadius) {
    newStyle.push({ borderRadius: borderRadius });
  }
  if (alignSelf) {
    newStyle.push({ alignSelf: alignSelf });
  }
  if (height) {
    newStyle.push({ height: height });
  }
  if (width) {
    newStyle.push({ width: width });
  }
  if (tintColor) {
    newStyle.push({ tintColor: tintColor });
  }
  if (backgroundColor) {
    newStyle.push({ backgroundColor: backgroundColor });
  }

  return <RNImage style={newStyle} source={source} resizeMode={resizeMode} />;
};

Image.propTypes = {
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
  borderRadius: PropTypes.any,
  alignSelf: PropTypes.oneOf([
    AppStyles.FlexAlignType.flexStart,
    AppStyles.FlexAlignType.flexEnd,
    AppStyles.FlexAlignType.center,
    AppStyles.FlexAlignType.stretch,
    AppStyles.FlexAlignType.baseline,
  ]),
  source: PropTypes.any,
  resizeMode: PropTypes.oneOf([
    AppStyles.ImageResizeMode.center,
    AppStyles.ImageResizeMode.contain,
    AppStyles.ImageResizeMode.cover,
    AppStyles.ImageResizeMode.repeat,
    AppStyles.ImageResizeMode.stretch,
  ]),
  height: PropTypes.any,
  width: PropTypes.any,
  tintColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
};

Image.defaultProps = {
  resizeMode: AppStyles.ImageResizeMode.contain,
};

export default Image;
