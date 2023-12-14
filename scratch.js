/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let leftP = 0;
    let rightP = height.length - 1;
    let max = null;
    while (leftP < rightP) {
        console.log(leftP, rightP);
        current = Math.min(height[leftP], height[rightP]) * (rightP - leftP);

        if (current > max) {
            max = current;
        }

        if (height[leftP] < height[rightP]) leftP++;
        else rightP--;
    }
    return max;
};

console.log(maxArea([1, 2, 4, 3]));
