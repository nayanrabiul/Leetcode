/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode } root
 * @return {boolean}
 */
var isValidBST = function (
    root,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER
) {
    if (root === null) return true;
    if (root.val <= min || root.val >= max) return false;
    return (
        isValidBST(root.left, min, root.val) &&
        isValidBST(root.right, root.val, max)
    );
};

let root = {
    val: 7,
    left: {
        val: 4,
        left: {
            val: 2,
            left: {
                val: 1,
                left: null,
                right: null,
            },
            right: {
                val: 3,
                left: null,
                right: null,
            },
        },
        right: {
            val: 6,
            left: {
                val: 5,
                left: null,
                right: null,
            },;
            right: null,
        },
    },
    right: null,
};

console.log(isValidBST(root));
