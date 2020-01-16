let containerDiv = document.querySelector("#sketchContainer");

function createGrid() {
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

createGrid();

const sketchCells = document.querySelectorAll('.sketchItem');
sketchCells.forEach(cell => cell.addEventListener("mouseenter", sketchEnter));
sketchCells.forEach(cell => cell.addEventListener("mouseleave", sketchExit));