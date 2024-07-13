import { removeElementById } from "./removeElement";

export const injectStyle = (id, css) => {
  // remove the existing style element
  removeElementById(id);

  const style = document.createElement("style");
  style.id = id;
  style.type = "text/css";
  style.className = "";
  style.textContent = css;

  if (document.head) {
    document.head.appendChild(style);
    return;
  }
  document.documentElement.appendChild(style);
};
