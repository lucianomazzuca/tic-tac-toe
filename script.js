const gameboard = (function(){
    let board = ['','','','','','','','',''];

    //Cache DOM
    let squares = document.querySelectorAll('.square')

    //Bind events
    squares.forEach(square => {
        square.addEventListener('click', addMark)
    })

    function addMark(mark){
        if(this.innerText == 0){
            if(game.checkTurn() == 'p1'){
                this.innerText = player1.mark;
                board[this.id] = this.innerText;
            }
            else{
                this.innerText = player2.mark;
                board[this.id] = this.innerText;
            }
            game.changeTurn()
            game.checkWinner()
        }
    }

    //Methods
    function render(){
       for(let i = 0; i < squares.length; i++){
        squares[i].innerText = board[i];
       } 
    }

    render()

    function reset(){
        board = ['','','','','','','','',''];
    }

    function showBoard(){
        return board
    }

    return{
        showBoard: showBoard
    }

})();

const game = (function(){
    let currentTurn = 'p1';

    const changeTurn = function(){
        if(currentTurn == 'p1'){
            currentTurn = 'p2';
        }
        else{
            currentTurn = 'p1'
        }
    }
    const checkTurn = function(){
        return currentTurn;
    }

    const displayWinner = function(winner){
        document.querySelector('.display').innerText = 'The winner is: ' + winner;
    }

    const checkWinner = function(){
        let board = gameboard.showBoard()
        if(
            (board[0] === board[1] && board[1] === board[2] && board[2] === 'X') ||
            (board[3] === board[4] && board[4] === board[5] && board[5] === 'X') ||
            (board[6] === board[7] && board[7] === board[8] && board[8] === 'X') ||
            (board[0] === board[3] && board[3] === board[6] && board[6] === 'X') ||
            (board[1] === board[4] && board[4] === board[7] && board[7] === 'X') ||
            (board[2] === board[5] && board[5] === board[8] && board[8] === 'X') ||
            (board[0] === board[4] && board[4] === board[8] && board[8] === 'X') ||
            (board[2] === board[4] && board[4] === board[6] && board[6] === 'X')
            ){
                displayWinner('Player 1')
                gameboard.reset();
                currentTurn = 'p1';
            }
            else if(
                (board[0] === board[1] && board[1] === board[2] && board[2] === 'O') ||
                (board[3] === board[4] && board[4] === board[5] && board[5] === 'O') ||
                (board[6] === board[7] && board[7] === board[8] && board[8] === 'O') ||
                (board[1] === board[4] && board[4] === board[7] && board[7] === 'O') ||
                (board[0] === board[3] && board[3] === board[6] && board[6] === 'O') ||
                (board[2] === board[5] && board[5] === board[8] && board[8] === 'O') ||
                (board[0] === board[4] && board[4] === board[8] && board[8] === 'O') ||
                (board[2] === board[4] && board[4] === board[6] && board[6] === 'O')
                ){
                    displayWinner('Player 2')
                    gameboard.reset();
                    currentTurn = 'p1';
                }
    }

    return{
        changeTurn,
        checkTurn,
        checkWinner,
    }
})();

const Players = function(mark){
    let score = 0;

    const win = function(){
        score++
    };
    
    return {
        mark,
        win,

    }
}

let player1 = Players('X');
let player2 = Players('O');

console.log(player1)