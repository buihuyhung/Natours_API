export const hideAleart = () => {
  const el = document.querySelector(".aleart");
  if (el) el.parentElement.removeChild(el);
};

export const showAlert = (type, msg) => {
  hideAleart();
  const markup = `<div class="aleart aleart--${type}">${msg}</div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
  window.setTimeout(hideAleart, 5000);
};
