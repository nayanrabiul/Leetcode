/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 1) return 0;
    let flag = 0,
        y = prices[0],
        x = 0,
        flag2 = 0;
    let max1 = 0;
    for (let i = 1; i < prices.length; i++) {
        if (y > prices[i]) {
            y = prices[i];
            x = 0;
        }
        if (prices[i - 1] < prices[i]) {
            x = prices[i];
            flag2 = 1;
        }
        max1 = Math.max(max1, x - y);
    }
    return max1;
};
