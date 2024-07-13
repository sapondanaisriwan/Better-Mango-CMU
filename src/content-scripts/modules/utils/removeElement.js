export const removeElementById = (id) => {
  const target = document.getElementById(id);
  target && target.remove();
};
