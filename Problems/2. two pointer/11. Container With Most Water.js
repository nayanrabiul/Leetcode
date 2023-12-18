/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let leftP = 0;
    let rightP = height.length - 1;
    let max = Number.NEGATIVE_INFINITY;
    let width, small_h, area;
    while (leftP <= rightP) {
        width = rightP - leftP;
        small_h = Math.min(height[leftP], height[rightP]);
        area = width * small_h;

        max = area > max ? area : max;

        if (height[leftP] < height[rightP]) leftP++;
        else rightP--;
    }
    return max;
};

console.log(maxArea([1, 2, 4, 3]));
