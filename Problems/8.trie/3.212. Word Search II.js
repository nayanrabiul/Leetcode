/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function (board, words) {
    let trie = {};
    let row = board.length;
    let col = board[0].length;
    let visited = new Array(row).fill(0).map(() => new Array(col).fill(false));

    let directions = [[0, 1], [0, -1][(1, 0)], [-1, 0]];

    let buildTrie = (words) => {
        for (let word of words) {
            let node = trie;
            for (let c of word) {
                if (!node[c]) {
                    node[c] = {};
                }
                node = node[c];
            }
            node.word = word;
        }
    };

    let search = (i, j) => {
        if (i < 0 || i >= row || j < 0 || j >= col) return;

        visited[i][j] = true;
        for (let [x, y] of directions) {
            search(i + x, j + y);
        }
        visited[i][j] = false;
    };

    buildTrie(words);

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            search(i, j);
        }
    }
};

let board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
];
let words = ["oath", "pea", "eat", "rain"];

findWords(board, words);
