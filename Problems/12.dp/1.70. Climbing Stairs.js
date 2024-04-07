/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
    let memo = new Array(n + 1).fill(-1);
    return climbStarisCount(n, memo);
};

var climbStarisCount = function (n, memo) {
    if (n === 0) return 1;
    if (n < 0) return 0;
    if (memo[n] !== -1) return memo[n];
    memo[n] = climbStarisCount(n - 1, memo) + climbStarisCount(n - 2, memo);
    return memo[n];
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(5)); // 8
