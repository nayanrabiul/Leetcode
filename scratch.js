/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set(nums);
    let l = 0;

    set.forEach((i) => {
        if (!set.has(i - 1)) {
            let tem = 1;
            let next = i + 1;
            while (set.has(next)) {
                tem++;
                next++;
            }
            if (tem > l) l = tem;
        }
    });
    return l;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
