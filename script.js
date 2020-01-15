let containerDiv = document.querySelector("#sketchContainer");

let createGrid = function() {
    for (let i=0; i < 16; i++) {
        let tempDivRow = document.createElement("div");
        tempDivRow.id = `Row ${i}`;
        tempDivRow.className = `sketchRow`;
        containerDiv.append(tempDivRow);

        for (let j=0; j < 16; j++) {
            let tempDivItem = document.createElement("div");
            tempDivItem.id =  `${i+1}-${j+1}`;
            tempDivItem.className = `sketchItem`;
            tempDivRow.appendChild(tempDivItem);
        }
    }
}

createGrid();