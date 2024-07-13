export const KeyExtensionStatus = "extensionStatus";
export const KeyExtensionTheme = "theme";

export const KeyHideGradedStudent = "hideGradedStudent";
export const KeyPopupFullHeight = "popupFullHeight";
export const KeyPopupSize = "popupSize";
export const keyShowOrderStudents = "showOrderOfStudents";
export const keyFillCircleColor = "fillCircleColor";

export const settingKey = [
  KeyExtensionStatus,
  KeyExtensionTheme,
  KeyHideGradedStudent,
  KeyPopupFullHeight,
  KeyPopupSize,
  keyShowOrderStudents,
  keyFillCircleColor,
];

export const defaultSetting = {
  [KeyExtensionStatus]: true,
  [KeyExtensionTheme]: true,
  [keyFillCircleColor]: false,
  [keyShowOrderStudents]: true,
  [KeyHideGradedStudent]: false,
  [KeyPopupFullHeight]: true,
  [KeyPopupSize]: 500,
};
