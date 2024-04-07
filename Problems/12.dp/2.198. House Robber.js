// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var rob = function (nums) {};

// console.log(rob([1, 2, 3, 1])); // 4
// console.log(rob([2, 7, 9, 3, 1])); // 12

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let dp = [];
    if (nums.length === 0 || nums.length === 1) return nums;
    dp[0] = nums[0];
    dp[1] = Math.max(dp[0], nums[1]);
    if (nums.length === 2) return dp[1];
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }
    return dp[nums.length - 1];
};
