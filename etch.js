
const gridspace = document.getElementById("gridspace")
function createGrid() {
    gridspace.innerHTML = ""
    let userRows = document.getElementById("myRows").value;
    let userColumns = document.getElementById("myColumns").value;
    gridspace.style.gridTemplateColumns = `repeat(${userColumns}, 20px)`;
    gridspace.style.gridTemplateRows = `repeat(${userRows}, 20px)`;
    for (let i = 0; i < userRows * userColumns; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridspace.appendChild(cell);
    }
}

const gridButton = document.getElementById("gridButton");
gridButton.addEventListener('click', createGrid)

function clearGrid() {
    gridspace.innerHTML = ""
}

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener('click', clearGrid)