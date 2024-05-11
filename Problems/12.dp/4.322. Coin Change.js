var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        //amount 1
        for (let coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                // console.log("🚀 ~ coinChange ~ dp[i]:", i, dp);
            }
        }
    }
};

let coins = [1, 2, 5];
let amount = 11;
console.log(coinChange(coins, amount)); // 3
