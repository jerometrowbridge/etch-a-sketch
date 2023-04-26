
const gridspace = document.getElementById("gridspace")
function createGrid() {
    gridspace.innerHTML = ""
    let userRows = document.getElementById("myRows").value;
    let userColumns = document.getElementById("myColumns").value;
    gridspace.style.gridTemplateColumns = `repeat(${userColumns}, 1fr)`;
    gridspace.style.gridTemplateRows = `repeat(${userRows}, 1fr)`;
    for (let i = 0; i < userRows * userColumns; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridspace.appendChild(cell);
    }
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', changeButton)
})
}

const gridButton = document.getElementById("gridButton");
gridButton.addEventListener('click', createGrid)

function clearGrid() {
    gridspace.innerHTML = ""
    document.getElementById("myRows").value = 0
    document.getElementById("myColumns").value = 0
}

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener('click', clearGrid)

function changeButton(e) {
    // const key = document.querySelector(`${e.cell}`)
   // key.classList.add('playing');
   e.target.classList.add('playing')
}

function checkNumber(input) {
    if (input.value > 100) input.value = 0;
    if (input.value < 0) input.value = 0;
}

const rowCheck = document.getElementById("myRows");
rowCheck.addEventListener('change', checkNumber);
const colCheck = document.getElementById("myColumns");
colCheck.addEventListener('change', checkNumber)


