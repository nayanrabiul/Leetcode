/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
    let count = 0;
    let m = grid.length;
    let n = grid[0].length;

    let dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === "0") {
            return;
        }

        grid[i][j] = "0";

        dfs(i - 1, j); //up
        dfs(i + 1, j); //down
        dfs(i, j - 1); //left
        dfs(i, j + 1); //up

        // grid[i][j] = 1;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
};
let grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid));
