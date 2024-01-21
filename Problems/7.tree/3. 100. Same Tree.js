/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {};

// let data1 = {
//     val: 1,
//     left: {
//         val: 2,
//         left: null,
//         right: null,
//     },
//     right: {
//         val: 3,
//         left: null,
//         right: null,
//     },
// };

// let data2 = {
//     val: 1,
//     left: {
//         val: 2,
//         left: null,
//         right: null,
//     },
//     right: {
//         val: 3,
//         left: null,
//         right: null,
//     },
// };

let data1 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null,
    },
    right: null,
};

let data2 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: null,
        right: null,
    },
};

console.log(isSameTree(data1, data2));
