import React, { useRef, useState } from "react";

import { AppColors, AppStrings, AppStyles } from "../../constants";
import { View, TextInput, Button } from "../../components";
import { useMutation } from "@apollo/client";
import { Mutation } from "../../services";
import { Alert, Keyboard } from "react-native";

import CheckInsInfoFieldsValidation from "./validator";

const Submit = ({ navigation }) => {
  const [checkInsInfo, setCheckInsInfo] = useState({
    placeholder: {
      name: AppStrings.tab1.form.placeholder.name,
      comment: AppStrings.tab1.form.placeholder.comment,
      imageURL: AppStrings.tab1.form.placeholder.imageURL,
    },
    value: {
      name: null,
      comment: null,
      imageURL: null,
    },
    errorMessage: null,
    isValidAllField: false,
  });
  const [doCheckIns, { loading }] = useMutation(Mutation.DO_CHECK_INS, {
    variables: {
      object: {
        comment: checkInsInfo.value.comment,
        image_url: checkInsInfo.value.imageURL,
        name: checkInsInfo.value.name,
        created_at: new Date().toISOString(),
      },
    },
    onCompleted: (response) => {
      Alert.alert(
        AppStrings.tab1.alert.title,
        AppStrings.tab1.alert.insertSuccess
      );
      setCheckInsInfo({
        ...checkInsInfo,
        value: {
          ...checkInsInfo.value,
          name: null,
          comment: null,
          imageURL: null,
        },
        errorMessage: null,
        isValidAllField: false,
      });
    },
    onError: (error) => {
      Alert.alert(AppStrings.tab1.alert.title, error?.message);
    },
  });
  const refNameField = useRef();
  const refCommentField = useRef();
  const refImageURLField = useRef();

  const renderNameFieldUIs = () => {
    return (
      <TextInput.Component
        innerRef={refNameField}
        containerMarginTop={16}
        containerBorderColor={AppColors.appD2D2D2}
        placeholder={AppStrings.tab1.form.placeholder.name}
        value={checkInsInfo.value.name}
        autoCapitalize={TextInput.AutoCapitalizeType.words}
        returnKeyType={TextInput.ReturnKeyType.next}
        onChangeText={(text) =>
          setCheckInsInfo({
            ...checkInsInfo,
            value: { ...checkInsInfo.value, name: text },
          })
        }
        onSubmitEditing={() => refCommentField.current.focus()}
      />
    );
  };

  const renderCommentNameFieldUIs = () => {
    return (
      <TextInput.Component
        innerRef={refCommentField}
        containerMarginTop={8}
        containerBorderColor={AppColors.appD2D2D2}
        placeholder={AppStrings.tab1.form.placeholder.comment}
        value={checkInsInfo.value.comment}
        returnKeyType={TextInput.ReturnKeyType.next}
        onChangeText={(text) =>
          setCheckInsInfo({
            ...checkInsInfo,
            value: { ...checkInsInfo.value, comment: text },
          })
        }
        onSubmitEditing={() => refImageURLField.current.focus()}
      />
    );
  };

  const renderImageURLFieldUIs = () => {
    return (
      <TextInput.Component
        innerRef={refImageURLField}
        containerMarginTop={8}
        containerBorderColor={AppColors.appD2D2D2}
        placeholder={AppStrings.tab1.form.placeholder.imageURL}
        value={checkInsInfo.value.imageURL}
        autoCapitalize={TextInput.AutoCapitalizeType.none}
        returnKeyType={TextInput.ReturnKeyType.done}
        blurOnSubmit={true}
        onChangeText={(text) =>
          setCheckInsInfo({
            ...checkInsInfo,
            value: { ...checkInsInfo.value, imageURL: text },
          })
        }
      />
    );
  };

  const onAddButtonPress = () => {
    Keyboard.dismiss();
    const validatorInfo = CheckInsInfoFieldsValidation(checkInsInfo);
    if (validatorInfo.isValidAllField && validatorInfo.errorMessage === null) {
      doCheckIns();
    } else {
      Alert.alert(AppStrings.tab1.alert.title, validatorInfo.errorMessage);
    }
  };

  const renderAddButtonUIs = () => {
    return (
      <Button
        marginTop={16}
        isLoading={loading}
        title={AppStrings.tab1.form.button.add}
        justifyContent={AppStyles.FlexAlignType.center}
        alignItems={AppStyles.FlexAlignType.center}
        onButtonPress={() => onAddButtonPress()}
      />
    );
  };

  const renderContainerUIs = () => {
    return (
      <View flex={1} paddingHorizontal={16}>
        {renderNameFieldUIs()}
        {renderCommentNameFieldUIs()}
        {renderImageURLFieldUIs()}
        {renderAddButtonUIs()}
      </View>
    );
  };

  return (
    <View flex={1} backgroundColor={AppColors.appF1F1F1}>
      {renderContainerUIs()}
    </View>
  );
};

export default Submit;
