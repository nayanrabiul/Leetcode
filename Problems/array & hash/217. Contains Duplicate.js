/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
    // let sorted_nums = nums.sort();
    // for (let i = 0; i < sorted_nums.length - 1; i++) {
    //     if (sorted_nums[i] === sorted_nums[i + 1]) {
    //         return true;
    //     }
    // }
    // return false;
    //
    //
    // let newArray = new Array(10).fill(0);
    // let flag = false;
    // nums.forEach((number) => {
    //     if (newArray[number] > 0) flag = true;
    //     else newArray[number] = 1;
    // });
    // return flag;
    //
    //
    // let set = new Set(nums);
    // if (set.size < nums.length) return true;
    // else return false;
};

let test_case = [
    [1, 2, 3, 1],
    [1, 2, 3, 4],
    [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
];

test_case.forEach((a) => {
    console.log(containsDuplicate(a));
});
