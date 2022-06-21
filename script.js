const GameBoard = () => {

    // Grid array
    let grid = ['0','1','2',
    '3','4','5',
    '6','7','8'];

    // Var of the ID grid clicked
    let idInfo;
    
    // Variable who select grid element
    const gridElement = document.querySelectorAll('.grid-display');
    
    // Function who reset the grid on click
    const _resetGrid = () => {
        gridElement.forEach(element => {
            element.textContent = '';
        })
    };
    
    // Function who activate _resetGrid() on click
    const activateReset = () => {
        const buttonElement = document.querySelector ('.reset-button');
        buttonElement.addEventListener('click', () => {
            _resetGrid();
        })
    };

    // Function who display "X" inside a container grid and get his ID;
    const displayPlayerMove = () => {
        gridElement.forEach(element => {
            element.addEventListener('click', (event) => {
                element.textContent = 'X';
                idInfo = event.target.id;
                console.log(idInfo);
                _populateGridArray();
                console.table(grid)
            })
        })
    };
    
    // Function who "populate" the grid array
    const _populateGridArray = () => {
        grid.splice(idInfo,1,'X')
    }

    return {grid, activateReset, displayPlayerMove}    
};


const test = GameBoard();
test.displayPlayerMove();