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

var maxPathSum = function (root) {
    let max = Number.MIN_SAFE_INTEGER;
    let newFUnctoin = (root) => {
        if (root === null) return 0;
        let leftValue = Math.max(0, newFUnctoin(root.left));
        let rightValue = Math.max(0, newFUnctoin(root.right));
        max = Math.max(max, leftValue + rightValue + root.val);
        return Math.max(leftValue, rightValue) + root.val;
    };
    newFUnctoin(root);
    return max;
};