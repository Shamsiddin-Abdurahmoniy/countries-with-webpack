const modeBtn = document.querySelector(".header__dark-mode");
const body = document.querySelector("body");
const modeText = document.querySelector(".mode-text");
// console.log(modeText);
const modeFromLocal = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : null;
if (modeFromLocal) {
  body.classList.add("dark-mode");
}
modeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  modeFromLocal
    ? localStorage.setItem("mode", "")
    : localStorage.setItem("mode", "dark");
});
