/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // let l = nums.length;
    // let arr = new Array(l);
    // let x = 0,
    //     y = 0,
    //     flag = 0;
    // let k = 0;
    // for (let i = 0; i < l; i++) {
    //     for (k = l - 1; k > i; k--) {
    //         if (nums[i] + nums[k] == target) {
    //             (x = i), (y = k);
    //             flag = 1;
    //             break;
    //         }
    //     }
    //     if (flag == 1) break;
    // }
    // return [x, y];
    //
    //
    // let flagArray = new Array(10000).fill(-1);
    // let need,
    //     find = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     need = target - nums[i];
    //     find = flagArray[need];
    //     console.log("🚀 ~ file: 1. Two Sum.js:31 ~ twoSum ~ find:", find);
    //     if (find !== -1) {
    //         return [flagArray[need], i];
    //     } else {
    //         flagArray[nums[i]] = i;
    //     }
    // }
    //
    //
    let map = new Map();
    let need,
        find = 0;
    for (let i = 0; i < nums.length; i++) {
        need = target - nums[i];
        find = map.has(need);
        if (find === true) {
            return [map.get(need), i];
        } else {
            map.set(nums[i], i);
        }
    }
};

console.log(twoSum([0, 4, 3, 0], 0));
