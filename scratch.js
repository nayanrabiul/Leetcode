/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set(nums);
    if (nums.length === 0) return 0;
    let max = 1;
    set.forEach((value) => {
        if (!set.has(value - 1)) {
            let count1 = 1;
            let new_value = value + 1;
            while (set.has(new_value)) {
                count1++;
                new_value++;
            }
            count1 > max ? (max = count1) : (max = max);
        }
    });
    return max;
};
console.log(longestConsecutive([1, 2, 3, 4, 1, 5, 12, 15]));

for (let index = 0; index < array.length; index++) {
    for (let index = 0; index < array.length; index++) {}
}
