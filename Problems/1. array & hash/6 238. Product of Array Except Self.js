/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let f_m = [];
    let b_m = [];

    let length = nums.length;

    for (let i = 0; i < length; i++) {
        if (i === 0) {
            f_m[i] = nums[i] * 1;
        } else {
            f_m[i] = nums[i] * f_m[i - 1];
        }
    }

    for (let i = length - 1; i >= 0; i--) {
        if (i === length - 1) {
            b_m[i] = nums[i] * 1;
        } else {
            b_m[i] = nums[i] * b_m[i + 1];
        }
    }
    let result = [];
    for (let i = 0; i < length; i++) {
        if (i === 0) {
            result[i] = b_m[1];
        } else if (i === length - 1) {
            result[i] = f_m[i - 1];
        } else {
            result[i] = f_m[i - 1] * b_m[i + 1];
        }
    }
    return result;
};

console.log(productExceptSelf([3, 4, 6, 7, 6, 7]));
