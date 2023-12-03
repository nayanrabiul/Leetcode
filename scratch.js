/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let arr2 = {};
    for (let i = 0; i < nums.length; i++) {
        arr2[nums[i]] += 1;
    }
    let a = [];
    console.log(arr2);
    arr2.forEach((value, index) => {
        if (value >= k) a.push(index);
    });
    return a;
};
console.log(topKFrequent([-1, -1], 2));

// let a = {
//     b: 3,
//     a: (x) => {
//         console.log(x);
//     },
//     fasd: {},
// };

// console.log(a["fasd"]);
