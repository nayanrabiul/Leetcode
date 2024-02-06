/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 *
 */

var kthSmallest = function (data, k, array = []) {
    if (data === null) return;
    kthSmallest(data.left, k, array);
    array.push(data.val);
    kthSmallest(data.right, k, array);

    return array[k - 1];
};

let root = {
    val: 3,
    left: {
        val: 1,
        left: null,
        right: {
            val: 2,
            left: null,
            right: null,
        },
    },
    right: {
        val: 4,
        left: null,
        right: null,
    },
};
let root2 = {
    val: 3,
    left: {
        val: 1,
        left: null,
        right: {
            val: 2,
            left: null,
            right: null,
        },
    },
    right: null,
};
console.log(kthSmallest(root, 1)); // 1
console.log(kthSmallest(root2, 1)); // 1
