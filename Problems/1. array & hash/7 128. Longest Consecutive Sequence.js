// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function (nums) {
//     nums.sort((a, b) => a - b);
//     let max1 = 0,
//         count = 1;
//     let a = [];
//     if (nums.length == 0) return 0;
//     if (nums.length == 1) return 1;
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i + 1] == nums[i]) {
//             count = count;
//         } else if (nums[i + 1] == nums[i] + 1) {
//             count++;
//         } else {
//             count = 1;
//         }
//         a.push(count);
//     }
//     let max = Math.max(...a);
//     return max;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;
    let set = new Set(nums);
    let max_length = 1;
    set.forEach((value) => {
        if (!set.has(value - 1)) {
            let temp_count = 1;
            let next_value = value + 1;
            while (set.has(next_value)) {
                temp_count++;
                next_value++;
            }
            max_length = max_length < temp_count ? temp_count : max_length;
        }
    });
    return max_length;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
