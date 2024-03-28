/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let result = [];

    const isSafe = (board, row, col) => {
        //checking vertically
        for (let i = 0; i < n; i++) {
            if (board[i][col] === "Q") {
                return false;
            }
        }

        //checking horizontally
        for (let i = 0; i < n; i++) {
            if (board[row][i] === "Q") {
                return false;
            }
        }

        let steps;

        //top left diagonal
        steps = Math.min(row, col);
        for (let i = 1; i <= steps; i++) {
            if (board[row - i][col - i] === "Q") {
                return false;
            }
        }

        //bottom left diagonal
        steps = Math.min(n - row - 1, col);
        for (let i = 1; i <= steps; i++) {
            if (board[row + i][col - i] === "Q") {
                return false;
            }
        }

        //bottom right diagonal
        steps = Math.min(n - row - 1, n - col - 1);
        for (let i = 1; i <= steps; i++) {
            if (board[row + i][col + i] === "Q") {
                return false;
            }
        }

        //top right diagonal
        steps = Math.min(row, n - col - 1);
        for (let i = 1; i <= steps; i++) {
            if (board[row - i][col + i] === "Q") {
                return false;
            }
        }

        return true;
    };

    function backtrack(row, board) {
        if (row === n) {
            //TODO : why
            result.push([...board]);
        }

        for (let col = 0; col < n; col++) {
            let is = isSafe(board, row, col);
            if (is) {
                board[row] =
                    board[row].substring(0, col) +
                    "Q" +
                    board[row].substring(col + 1);
                backtrack(row + 1, board);
                board[row] =
                    board[row].substring(0, col) +
                    "." +
                    board[row].substring(col + 1);
            }
        }
    }

    const emptyRow = ".".repeat(n);
    const board = Array(n).fill(emptyRow);

    backtrack(0, board);

    return result;
};

console.log(solveNQueens(4));
