let gridCellAmount = 16;

const grid = document.querySelector(".grid");

const changeColor = (e) => {
  e.target.style.backgroundColor = "black";
};

for (let i = 0; i < gridCellAmount * gridCellAmount; i++) {
  const cell = document.createElement("div");
  cell.addEventListener("mousedown", changeColor);
  cell.classList.add("border-top-left");
  cell.classList.add("grid-item");
  grid.appendChild(cell);
}
