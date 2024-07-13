import { KeyHideGradedStudent } from "../../../../data/storage-key";
import { injectStyle } from "../../utils/injectStyle";
import { removeElementById } from "../../utils/removeElement";

export const optionHideGradedStudent = (status) => {
  if (!status) {
    removeElementById(KeyHideGradedStudent);
    return;
  }

  injectStyle(
    KeyHideGradedStudent,
    `
  #students_selectmenu-menu li.graded {
    display: none !important;
  }
  `
  );
};
