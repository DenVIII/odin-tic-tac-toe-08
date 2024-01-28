function Gameboard() {
    const rows = 3
    const cols = 3
    const _board = []

    for (let i = 0; i < rows; i++) {
        _board.push([])
        for (let j = 0; j < cols; j++) {
            _board[i].push(Cell())
        }
    }

    function placeMark(cell, player) {
        
    }

    function getBoard() {
        return _board
    }

    function printBoard() {
        console.log(_board)
    }

    return {getBoard, placeMark, printBoard}
}

function Cell(){
    let value = '-'

    function addMark(player) {
        value = player
    }

    function getValue() {
        return value
    }

    return {addMark, getValue}
}

function GameController(
    playerOne = 'Player One',
    playerTwo = 'Player Two'
){
    const board = Gameboard()
    const players = [
        { 
            name: playerOne,
            mark: 'X'
        },
        {
            name: playerTwo,
            mark: 'O'

        }
    ]
    board.printBoard();
}

const game = GameController();