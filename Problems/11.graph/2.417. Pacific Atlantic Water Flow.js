/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    const rows = heights.length;
    const cols = heights[0].length;

    let pacific = Array(rows)
        .fill()
        .map(() => Array(cols).fill(false));

    const direction = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    let dfs = (r, c) => {
        pacific[r][c] = true;

        for (const [dr, dc] of direction) {
            const newR = r + dr;
            const newC = c + dc;

            if (
                newR < 0 ||
                newR >= rows ||
                newC < 0 ||
                newC >= cols ||
                pacific[newR][newC] ||
                heights[newR][newC] < heights[r][c]
            ) {
                continue;
            }

            dfs(newR, newC);
        }
    };

    for (let r = 0; r < rows; r++) {
        dfs(r, 0);
    }
    for (let r = 0; r < rows; r++) {
        console.log(pacific[r].toString());
    }
};

let array = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
];

pacificAtlantic(array);
