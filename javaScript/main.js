const range = document.getElementById("range");
const rangeUI = document.getElementById("range_UI");
const pickColor = document.getElementById("pickColor");
const mainContainer = document.querySelector(".main_container");
const clearBtn = document.querySelector(".Clear");

let draw = false;
let color = "black";
function clearBoard() {
  mainContainer.innerHTML = "";
}
function pick() {
  pickColor.addEventListener("mouseleave", () => {
    color = pickColor.value;
  });
}
function black() {
  color = "black";
}
function eraser() {
  color = "white";
}
function random() {
  color = `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
}

rangeUI.textContent = `${range.value}X${range.value}`;

clearBtn.addEventListener("click", () => {
  clearBoard();
  pushDivs(range.value);
});
range.addEventListener("click", () => {
  clearBoard();
  rangeUI.textContent = `${range.value}X${range.value}`;
  pushDivs(range.value);
});

function pushDivs(size) {
  mainContainer.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  mainContainer.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  for (let i = 0; i < range.value ** 2; i++) {
    let square = document.createElement("div");
    mainContainer.insertAdjacentElement("beforeend", square);

    square.addEventListener("mousemove", () => {
      if (!draw) return;
      square.style.backgroundColor = color;
    });
  }
}

window.addEventListener("mousedown", () => {
  draw = true;
});
window.addEventListener("mouseup", () => {
  draw = false;
});
pushDivs(range.value);
