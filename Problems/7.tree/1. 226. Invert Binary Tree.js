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
 * @return {TreeNode}
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

var invertTree = function (root) {
    if (root === null) return;

    invertTree(root.right);
    invertTree(root.left);

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    return root;
};

let data = {
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
        val: 7,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 9,
            left: null,
            right: null,
        },
    },
};
printBinaryTree(data);
printBinaryTree(invertTree(data));
