function createGrid() {
    const containerDiv = document.querySelector("#sketchContainer");

    for (let i=0; i < 16; i++) {
        for (let j=0; j < 16; j++) {
            let tempDivItem = document.createElement("div");
            tempDivItem.id =  `${i+1}-${j+1}`;
            tempDivItem.className = `sketchItem`;
            containerDiv.appendChild(tempDivItem);
        }
    }
}

function sketchEnter(e) {
    const cell = document.getElementById(`${e.target.id}`);
    if (cell.classList.contains("draw") == false) {cell.classList.add("draw")};
    cell.classList.add("hover");
}

function sketchExit(e) {
    const cell = document.getElementById(`${e.target.id}`);
    cell.classList.remove("hover");
}

function sketchClear(cell) {
    const containerDiv = document.querySelector("#sketchContainer");
    const childCell = document.getElementById(cell);
    childCell.classList.remove("draw");
}

function resetSketchpad(e) {
    sketchCells.forEach(cell => sketchClear(cell.id));
}

createGrid();

const sketchCells = document.querySelectorAll('.sketchItem');
sketchCells.forEach(cell => cell.addEventListener("mouseenter", sketchEnter));
sketchCells.forEach(cell => cell.addEventListener("mouseleave", sketchExit));

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", resetSketchpad);