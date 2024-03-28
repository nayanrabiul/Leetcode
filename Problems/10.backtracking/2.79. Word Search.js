/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let trie = {};
    let row = board.length;
    let col = board[0].length;
    let visited = Array(row)
        .fill(0)
        .map(() => Array(col).fill(false));
    let direction = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    var makeTrie = function (word) {
        let node = trie;
        for (let c of word) {
            if (!node[c]) node[c] = {};
            node = node[c];
        }
        node.word = word;
    };
    makeTrie(word);
    var search = function (i, j, node) {
        if (node.word === word) {
            flag = true;
            return;
        }
        if (
            i < 0 ||
            j < 0 ||
            i >= row ||
            j >= col ||
            visited[i][j] ||
            !node[board[i][j]]
        )
            return;
        visited[i][j] = true;
        for (let [x, y] of direction) {
            search(i + x, j + y, node[board[i][j]]);
        }
        visited[i][j] = false;
    };
    let flag = false;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            search(i, j, trie);
        }
    }
    return flag;
};
let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
];
let word = "SEF";
console.log(exist(board, word));
