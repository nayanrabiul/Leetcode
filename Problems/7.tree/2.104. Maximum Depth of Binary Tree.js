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
 * @return {number}
 */

var printBinaryTree = (root, space = 0, count = 10) => {
    // Base case
    if (root === null) return;

    // Increase distance between levels
    space += count;

    // Process right child first
    printBinaryTree(root.right, space);

    console.log(" ".repeat(space - count) + root.val);

    // Process left child
    printBinaryTree(root.left, space);
};

var maxDepth = function (root, depth = 0) {
    if (root === null) return depth;

    let leftDepth = maxDepth(root.left, depth + 1);
    let rightDepth = maxDepth(root.right, depth + 1);

    return Math.max(leftDepth, rightDepth);
};

let data = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null,
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
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

console.log(maxDepth(data));
console.log(maxDepth(data2));
