const gameboard = (function(){
    let board = ['','','','','','','','',''];

    //Cache DOM
    let squares = document.querySelectorAll('.square')

    //Bind events
    squares.forEach(square => {
        square.addEventListener('click', addMark)
    })

    function addMark(){
        this.innerText = 'X';
        board[this.id] = this.innerText;
    }

    //Methods
    function render(){
       for(let i = 0; i < squares.length; i++){
        squares[i].innerText = board[i];
       } 
        
    }

    render()

    function showBoard(){
        return console.log(board)
    }

    return{
        showBoard: showBoard
    }

})();

const game = {

}

const Players = function(){

    return {

    }
}