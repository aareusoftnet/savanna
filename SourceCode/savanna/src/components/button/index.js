import React from "react";
import Text from "../text";
import PropTypes from "prop-types";
import TouchableOpacity from "../touchable-opacity";

import { AppColors, AppFonts, AppStyles } from "../../constants";
import { ActivityIndicator } from "react-native";

const Button = (props) => {
  const {
    isLoading,
    loadingIndicatorColor,
    position,
    start,
    top,
    end,
    bottom,
    isDisable,
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
    height,
    width,
    alignContent,
    alignItems,
    alignSelf,
    justifyContent,
    borderRadius,
    borderWidth,
    borderColor,
    backgroundColor,
    title,
    titleFontStyle,
    titleColor,
    titleMarginStart,
    titleMarginEnd,
    style,
    onButtonPress,
  } = props;

  const renderTitleUIs = () => {
    return (
      title && (
        <Text
          marginStart={titleMarginStart}
          marginEnd={titleMarginEnd}
          fontStyle={titleFontStyle}
          color={titleColor}
        >
          {title}
        </Text>
      )
    );
  };

  const renderLoadingIndicatorUIs = () => {
    return (
      <ActivityIndicator
        size={"small"}
        hidesWhenStopped={true}
        color={loadingIndicatorColor}
      />
    );
  };

  return (
    <TouchableOpacity
      position={position}
      start={start}
      top={top}
      end={end}
      bottom={bottom}
      isDisable={isDisable}
      marginStart={marginStart}
      marginTop={marginTop}
      marginEnd={marginEnd}
      marginBottom={marginBottom}
      marginHorizontal={marginHorizontal}
      marginVertical={marginVertical}
      paddingStart={paddingStart}
      paddingTop={paddingTop}
      paddingEnd={paddingEnd}
      paddingBottom={paddingBottom}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      flexDirection={AppStyles.FlexDirection.row}
      justifyContent={justifyContent}
      alignContent={alignContent}
      alignItems={alignItems}
      alignSelf={alignSelf}
      height={height}
      width={width}
      borderRadius={borderRadius}
      borderColor={borderColor}
      borderWidth={borderWidth}
      backgroundColor={backgroundColor}
      style={style}
      onItemPress={() => onButtonPress && onButtonPress()}
    >
      {isLoading ? renderLoadingIndicatorUIs() : renderTitleUIs()}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  isLoading: PropTypes.bool,
  loadingIndicatorColor: PropTypes.string,
  position: PropTypes.oneOf([
    AppStyles.Position.absolute,
    AppStyles.Position.relative,
  ]),
  start: PropTypes.any,
  top: PropTypes.any,
  end: PropTypes.any,
  bottom: PropTypes.any,
  isDisable: PropTypes.bool.isRequired,
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
  height: PropTypes.any,
  width: PropTypes.any,
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
  borderRadius: PropTypes.number,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  leftImage: PropTypes.any,
  leftImageHeight: PropTypes.any,
  leftImageWidth: PropTypes.any,
  title: PropTypes.string,
  titleFontStyle: PropTypes.object,
  titleColor: PropTypes.any,
  titleMarginStart: PropTypes.any,
  titleMarginEnd: PropTypes.any,
  rightImage: PropTypes.any,
  rightImageHeight: PropTypes.any,
  rightImageWidth: PropTypes.any,
  style: PropTypes.object,
  onButtonPress: PropTypes.func,
};

Button.defaultProps = {
  isDisable: false,
  titleColor: AppColors.appFFFFFF,
  borderRadius: 8,
  backgroundColor: AppColors.app4027DF,
  height: 50,
  loadingIndicatorColor: AppColors.appFFFFFF,
  titleFontStyle: AppStyles.FontStyles.regular(16, AppFonts.rajdhani.regular),
};

export default Button;
