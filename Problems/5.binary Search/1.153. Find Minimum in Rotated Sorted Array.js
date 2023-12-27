/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    let middle = Math.ceil((start + end) / 2);
    let result = nums[middle];

    while (start < end) {
        if (nums[start] < nums[middle]) {
            if (nums[middle] > nums[end]) {
                start = middle + 1;
            } else end = middle - 1;
        } else {
            end = middle - 1;
        }
        middle = Math.ceil((start + end) / 2);
        result = Math.min(result, nums[middle]);
    }
    return result;
};
