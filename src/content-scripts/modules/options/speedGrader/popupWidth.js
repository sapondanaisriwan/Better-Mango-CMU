import { KeyPopupSize } from "../../../../data/storage-key";
import { injectStyle } from "../../utils/injectStyle";

export const optionPopupWidth = (size) => {
  injectStyle(
    KeyPopupSize,
    `
  #students_selectmenu-menu {
    width: ${size}px !important;
  }
  `
  );
};
