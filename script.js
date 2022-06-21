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

    // Function who display player move and get ID;
    const displayPlayerMove = () => {
        gridElement.forEach(element => {
            element.addEventListener('click', (event) => {
                //element.textContent = 'X';
                idInfo = event.target.id;
                _populateGridArray();
                _displayGrid();
                console.log(grid)
            })
        })
    };
    
    // Function who "populate" the grid array
    const _populateGridArray = () =>{
        if (grid[idInfo] != 'X' || 'O') {
            grid.splice(idInfo,1,'X')
        }
        else {console.log('no')}
    }

    // Function who display the grid array on DOM
    const _displayGrid = () => {
        let gridIndex;
        grid.forEach(element => {
            if(element === 'X' || element ==='O'){
                gridIndex = grid.indexOf(element);
                document.getElementById(gridIndex).textContent = grid[gridIndex];
            }     
    })
    }

    return {grid, activateReset, displayPlayerMove, _displayGrid}    
};


const test = GameBoard();
test.displayPlayerMove();