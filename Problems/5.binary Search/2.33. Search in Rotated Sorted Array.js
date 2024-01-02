/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid = Math.ceil((high + low) / 2);
    if (nums[mid] === target) return mid;
    while (low < high) {
        if (nums[low] <= nums[mid]) {
            //if true, left porstion is sorted.
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] <= target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        mid = Math.ceil((low + high) / 2);
        if (nums[mid] === target) return mid;
    }
    return -1;
};
