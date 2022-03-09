import { StyleSheet } from "react-native";

const StatusBarStyle = {
  default: "default",
  lightContent: "light-content",
  darkContent: "dark-content",
};

const Position = {
  absolute: "absolute",
  relative: "relative",
};

const OverFlow = {
  visible: "visible",
  hidden: "hidden",
  scroll: "scroll",
};

const FlexDirection = {
  row: "row",
  column: "column",
  rowReverse: "row-reverse",
  columnReverse: "column-reverse",
};

const FlexWrap = {
  wrap: "wrap",
  nowrap: "nowrap",
  wrapReverse: "wrap-reverse",
};

const FlexAlignType = {
  auto: "auto",
  baseline: "baseline",
  center: "center",
  flexStart: "flex-start",
  flexEnd: "flex-end",
  spaceAround: "space-around",
  spaceBetween: "space-between",
  spaceEvenly: "space-evenly",
  stretch: "stretch",
};

const ImageResizeMode = {
  cover: "cover",
  contain: "contain",
  stretch: "stretch",
  repeat: "repeat",
  center: "center",
};

const TextAlign = {
  auto: "auto",
  justify: "justify",
  left: "left",
  center: "center",
  right: "right",
};

const FontStyles = StyleSheet.create({
  regular: (fontSize, fontFamily) => ({
    fontSize: fontSize,
    fontFamily: fontFamily,
  }),
  bold: (fontSize, fontFamily) => ({
    fontSize: fontSize,
    fontFamily: fontFamily,
  }),
});

export {
  StatusBarStyle,
  Position,
  OverFlow,
  FlexDirection,
  FlexWrap,
  FlexAlignType,
  FontStyles,
  ImageResizeMode,
  TextAlign,
};
