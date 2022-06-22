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
                //console.log(grid)
            })
        })
    };
    
    // Function who "populate" the grid array
    const _populateGridArray = () =>{
        if (grid[idInfo] != 'X' || 'O') {
            grid.splice(idInfo,1,'X')
        }
        else {console.log('no')}
    };

    // Function who display the grid array on DOM
    const _displayGrid = () => {
        for (let i=0; i<grid.length; i++)
            if (grid[i] === 'X' || grid[i] === 'O'){
                document.getElementById(i).textContent = 'X';
            }
    };

    return {grid, activateReset, displayPlayerMove}    
};


const Player = (() => {

    let player1Name;
    let player2Name;

    // Function to get player 1 & 2 name form input data
    const getPlayerName = () => {
        playerNameForm = document.querySelector('.formPlayerName');
        playerNameForm.addEventListener('submit', (event) => {
            event.preventDefault();
            player1Name = document.querySelector('.player1').value || 'Player 1';
            player2Name = document.querySelector('.player2').value || 'Player 2';
            _displayPlayerName();}
        )
    };

    // Function who display player Name
    const _displayPlayerName = () => {
        document.querySelector('.player1NameDisplay').textContent = player1Name;
        document.querySelector('.player2NameDisplay').textContent = player2Name;

    };

    return {getPlayerName}

})();



const test = GameBoard();
test.displayPlayerMove();

Player.getPlayerName();

