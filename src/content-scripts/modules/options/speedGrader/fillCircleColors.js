import { keyFillCircleColor } from "../../../../data/storage-key";
import { injectStyle } from "../../utils/injectStyle";
import { removeElementById } from "../../utils/removeElement";

export const optionFillCircleColors = (status) => {
  if (!status) {
    removeElementById(keyFillCircleColor);
    return;
  }
  injectStyle(
    keyFillCircleColor,
    `
    .numberCircle {
        display: flex !important;
        justify-content: center;
        align-items: center;
        color: #fff;
        line-height: 0px;
        border-radius: 50%;
        font-size: 10px !important;
        width: 18px;
        height: 18px;
    }
    .statusGreen {
        background-color: #0b874b;
    }
    .statusOrange {
        background-color: #f89406;
    }
    `
  );
};
