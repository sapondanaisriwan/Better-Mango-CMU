import {
  keyFillCircleColor,
  KeyHideGradedStudent,
  KeyPopupFullHeight,
  KeyPopupSize,
  keyShowOrderStudents,
} from "../../../data/storage-key";
import { optionFillCircleColors } from "./speedGrader/fillCircleColors";
import { optionHideGradedStudent } from "./speedGrader/hideGradedStudent";
import { optionPopupFullHeight } from "./speedGrader/popupFullHeight";
import { optionPopupWidth } from "./speedGrader/popupWidth";
import { optionShowOrderOfStudents } from "./speedGrader/showOrderOfStudents";

export const injectAllChanges = async (data) => {
  optionHideGradedStudent(data[KeyHideGradedStudent]);
  optionPopupFullHeight(data[KeyPopupFullHeight]);
  optionPopupWidth(data[KeyPopupSize]);
  optionShowOrderOfStudents(data[keyShowOrderStudents]);
  optionFillCircleColors(data[keyFillCircleColor]);
};
