let containerDiv = document.querySelector("#sketchContainer");

function createGrid() {
    for (let i=0; i < 16; i++) {
        //let tempDivRow = document.createElement("div");
        //tempDivRow.id = `Row ${i}`;
        //tempDivRow.className = `sketchRow`;
        //containerDiv.appendChild(tempDivRow);

        for (let j=0; j < 16; j++) {
            let tempDivItem = document.createElement("div");
            tempDivItem.id =  `${i+1}-${j+1}`;
            tempDivItem.className = `sketchItem`;
            containerDiv.appendChild(tempDivItem);
        }
    }
}

function sketchEnter(e) {

}

function sketchExit(e) {

}

createGrid();

const sketchCells = document.querySelectorAll('.sketchItem');
sketchCells.forEach(cell => cell.addEventListener("mouseenter", sketchEnter));
sketchCells.forEach(cell => cell.addEventListener("mouseleave", sketchExit));