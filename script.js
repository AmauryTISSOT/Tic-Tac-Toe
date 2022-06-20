// Function who display "X" inside container grid
const gridElement = document.querySelectorAll('.grid-display');

const displayPlayerMove = () => {
    gridElement.forEach(element => {
        element.addEventListener('click', () => {
            element.textContent = 'X';
        })
    })
}

displayPlayerMove();

// Function who "reset" the grid

const resetGrid = () => {
    gridElement.forEach(element => {
        element.textContent = '';
    })
}

// Function who activate resetGrid() on click

const activateReset = () => {
    const buttonElement = document.querySelector ('.reset-button');
    buttonElement.addEventListener('click', () => {
        resetGrid();
    })
}

activateReset();

