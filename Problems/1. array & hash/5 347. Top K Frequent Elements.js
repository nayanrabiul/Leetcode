/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        //if element not present , then add it with count 1
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }

    let result = [];

    map.forEach((value, index) => {
        let nearay = [index, value];
        result.push(nearay);
    });

    result.sort((a, b) => b[1] - a[1]);

    let final_result = [];
    for (let i = 0; i < k; i++) {
        final_result.push(result[i][0]);
    }

    return final_result;
};
console.log(topKFrequent([1, 2, 4, 4], 2));
