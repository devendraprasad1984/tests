const myChessBoardDom = document.getElementById("chessboard")

const drawChessBoard = (rows = 8, columns = 8) => {
    let board = []
    for (let row = 0; row < rows; row++) {
        let line = []
        for (let col = 0; col < columns; col++) {
            line.push(`<span class="cell center" id="cell_${col}">(${row+1} - ${col + 1})</span>`)
        }
        board.push(`<div class="line" id="row_${row+1}">${line.join('')}</div>`)
    }
    myChessBoardDom.innerHTML=board.join('')
}

(function (){
    drawChessBoard()
    // drawChessBoard(9,9)
    // drawChessBoard(10,10)
})()
