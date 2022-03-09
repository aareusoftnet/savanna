import React from "react";
import PropTypes from "prop-types";

import { Image, Text, TouchableOpacity, View } from "../../../components";
import { AppColors, AppStyles, AppFonts } from "../../../constants";
import { AppHelper } from "../../../utils";

const Item = (props) => {
  const { marginTop, item, onItemPress } = props;
  const { id, image_url, name, created_at, comment } = item;
  let hasImage = false;
  if (image_url) {
    if (image_url !== "" && image_url !== "null") {
      hasImage = true;
    }
  }

  const renderImageUIs = (imageWidth, imageHeight) => {
    return (
      <Image
        width={imageWidth}
        height={imageHeight}
        source={{ uri: image_url }}
        resizeMode={AppStyles.ImageResizeMode.cover}
      />
    );
  };

  const renderImageContainerUIs = () => {
    const width = AppHelper.WINDOW_WIDTH - 64;
    const height = width * 0.71;
    return (
      hasImage && (
        <View
          marginTop={16}
          borderRadius={8}
          width={width}
          height={height}
          backgroundColor={AppColors.app5E6279}
          overflow={AppStyles.OverFlow.hidden}
        >
          {renderImageUIs(width, height)}
        </View>
      )
    );
  };

  const renderGroupImageUIs = () => {
    return (
      <Image
        width={43}
        height={43}
        source={require("../../../assets/images/iconGroup.png")}
      />
    );
  };

  const renderTitleUIs = () => {
    return (
      name && (
        <Text
          color={AppColors.app171A1F}
          fontStyle={AppStyles.FontStyles.regular(16, AppFonts.nunito.regular)}
        >
          {name}
        </Text>
      )
    );
  };

  const renderSubTitleUIs = () => {
    return (
      created_at && (
        <Text
          color={AppColors.app4027DF}
          fontStyle={AppStyles.FontStyles.regular(16, AppFonts.nunito.regular)}
        >
          {AppHelper.readableDateInString(created_at)}
        </Text>
      )
    );
  };

  const renderTitleSubTitleUIs = () => {
    return (
      <View flex={1} marginStart={8}>
        {renderTitleUIs()}
        {renderSubTitleUIs()}
      </View>
    );
  };

  const renderTopContainerUIs = () => {
    return (
      <View
        marginTop={hasImage ? 16 : 24}
        flexDirection={AppStyles.FlexDirection.row}
        alignItems={AppStyles.FlexAlignType.center}
      >
        {renderGroupImageUIs()}
        {renderTitleSubTitleUIs()}
      </View>
    );
  };

  const renderDescriptionUIs = () => {
    return (
      <Text
        color={AppColors.app171A1F}
        fontStyle={AppStyles.FontStyles.regular(16, AppFonts.nunito.regular)}
      >
        {comment}
      </Text>
    );
  };

  const renderBottomContainerUIs = () => {
    return <View marginTop={16}>{renderDescriptionUIs()}</View>;
  };

  return (
    <TouchableOpacity
      marginTop={marginTop}
      paddingHorizontal={16}
      paddingBottom={24}
      borderRadius={8}
      backgroundColor={AppColors.appFFFFFF}
      onItemPress={() => onItemPress && onItemPress(item)}
    >
      {renderImageContainerUIs()}
      {renderTopContainerUIs()}
      {renderBottomContainerUIs()}
    </TouchableOpacity>
  );
};

Item.propTypes = {
  marginTop: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  onItemPress: PropTypes.func.isRequired,
};

Item.defaultProps = {
  marginTop: 16,
  onItemPress: () => null,
};

export default Item;
