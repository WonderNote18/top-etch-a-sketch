function createGrid(size) {
    let containerDiv = document.querySelector("#sketchContainer");
    containerDiv.setAttribute('style',
    `grid-template-rows: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr)`);

    for (let i=0; i < size; i++) {
        for (let j=0; j < size; j++) {
            let tempDivItem = document.createElement("div");
            tempDivItem.id =  `${i+1}-${j+1}`;
            tempDivItem.className = `sketchItem`;
            containerDiv.appendChild(tempDivItem);
        }
    }
    const sketchCells = document.querySelectorAll('.sketchItem');
    sketchCells.forEach(cell => cell.addEventListener("mouseenter", sketchEnter));
    sketchCells.forEach(cell => cell.addEventListener("mouseleave", sketchExit));
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
    containerDiv.removeChild(childCell);
}

function resetSketchpad() {
    const sketchCells = document.querySelectorAll('.sketchItem');
    sketchCells.forEach(cell => sketchClear(cell.id));

    let sizePrompt = prompt("How big do you want to create your sketchpad?\n(ex. 32 for a 32x32 grid)");

    if (isNaN(sizePrompt)) {
        alert(`ERROR! "${sizePrompt}" is not a number!`);
    } else {
        let sizeNumber = parseInt(sizePrompt);
        if (sizeNumber < 1) {alert(`ERROR! "${sizeNumber}" is not greater than 1!`)}
        createGrid(sizeNumber)
    }
}

createGrid(16);

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", resetSketchpad);