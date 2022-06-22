
const GameBoard = (() => {
    
    // Grid array
    let grid = ['0', 1, 2,
                3, 4, 5,
                6, 7, 8];
    
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
        const buttonElement = document.querySelector('.reset-button');
        buttonElement.addEventListener('click', () => {
            _resetGrid();
            document.querySelector('.showWhoWon').textContent = '';

        })
    };

    // Function who display player move and get ID;
    const displayPlayerMove = () => {
        const getPlayerMoveIndex = GameLogic.getPlayerMoveIndex; // Inheritance from GameLogic module
        const confirmWinConditions = GameLogic.confirmWinConditions; // Inheritance from GameLogic module
        gridElement.forEach(element => {
            element.addEventListener('click', (event) => {
                idInfo = event.target.id;
                _populateGridArray();
                _displayGrid();
                getPlayerMoveIndex();
                confirmWinConditions();
            })
        })
    };

    // Function who "populate" the grid array
    const _populateGridArray = () => {
        const playerTurn = GameLogic.playerTurn; // Inheritance from GameLogic module
        if (grid[idInfo] != 'X' || grid[idInfo] != 'O') {
            grid.splice(idInfo, 1, playerTurn())
        }
    };

    // Function who display the grid array on DOM
    const _displayGrid = () => {
        for (let i = 0; i < grid.length; i++) {
            if (grid[i] === 'X') {
                document.getElementById(i).textContent = 'X';
            }
            if (grid[i] === 'O') {
                document.getElementById(i).textContent = 'O';
            }
        };
    }


    return { 
        grid, 
        activateReset, 
        displayPlayerMove }
})();


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
            _displayPlayerName();
        }
        )
    };

    // Function who display player Name
    const _displayPlayerName = () => {
        document.querySelector('.player1NameDisplay').textContent = player1Name;
        document.querySelector('.player2NameDisplay').textContent = player2Name;
    };

    return { getPlayerName }

})();


const GameLogic = (() => {
    
    // Module scope variable
    let currentPlayerTurn = true;
    let arrayWithX = [];
    let arrayWithO = [];
    let matchWinX = [];
    let matchWinO = [];
    const grid = GameBoard.grid // Inheritance from GameBoard factory

    // Object with all the wining conditions by grid index
    const winObject = {
        horizontalRowWin: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ],
        verticalRowWin: [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ],
        diagonalRowWin:[
            [0, 4, 8],
            [2, 4, 6]
        ]
    }; 
    
    // Function to get playerTurn
    const playerTurn = () => {
        if (currentPlayerTurn) {
            currentPlayerTurn = false
            return 'X';
        }
        else {
            currentPlayerTurn = true
            return 'O';
        }
    };
    
    // Function to get wining conditions
    const getPlayerMoveIndex = () => {
        
        for (let i = 0; i < grid.length; i++) {
            if (grid[i] === 'X') {
                arrayWithX.push(i);   
        }}

        for (let i = 0; i < grid.length; i++) {
            if (grid[i] === 'O') {
                arrayWithO.push(i);
        }}
    };

    // Function to check winning conditions
    
    const checkWinConditions = () => {
        Object.values(winObject).forEach(val => val.forEach(i => {
            matchWinX.push(i.every(arrayItems => arrayWithX.includes(arrayItems)));
        }));

        Object.values(winObject).forEach(val => val.forEach(i => {
            matchWinO.push(i.every(arrayItems => arrayWithO.includes(arrayItems)));
        }));
    };

    // Function who confirm winning conditions and display the game winner

    const confirmWinConditions = () => {
        checkWinConditions();
        if(matchWinX.includes(true)){
            document.querySelector('.showWhoWon').textContent = 'X win the game !'
        }
        if(matchWinO.includes(true)){
            document.querySelector('.showWhoWon').textContent = '0 win the game !'
        }
        showDraw();
    };

    return { 
        playerTurn, 
        getPlayerMoveIndex, 
        confirmWinConditions }

})();

GameBoard.displayPlayerMove();
GameBoard.activateReset();
Player.getPlayerName();
