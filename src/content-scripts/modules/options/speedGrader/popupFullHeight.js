import { KeyPopupFullHeight } from "../../../../data/storage-key";
import { injectStyle } from "../../utils/injectStyle";
import { removeElementById } from "../../utils/removeElement";

export const optionPopupFullHeight = (status) => {
  if (!status) {
    removeElementById(KeyPopupFullHeight);
    return;
  }

  injectStyle(
    KeyPopupFullHeight,
    `
  #students_selectmenu-menu {
    height: calc(100dvh - 55px) !important;
    max-height: none !important;
  }
  `
  );
};
