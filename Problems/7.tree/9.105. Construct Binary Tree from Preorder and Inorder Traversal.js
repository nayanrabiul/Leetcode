/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function (preorder, inorder) {
    console.log(preorder, inorder);
    if (preorder.length === 0) return null;
    let root = {
        val: preorder[0],
        left: null,
        right: null,
    };
    let index = inorder.indexOf(preorder[0]);
    root.left = buildTree(
        preorder.slice(1, index + 1),
        inorder.slice(0, index)
    );
    root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
    return root;
};

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];

let printBinaryTree = (data, depth = 0) => {
    if (data === null) return;

    printBinaryTree(data.right, depth + 10);
    console.log(" ".repeat(depth), data.val);
    printBinaryTree(data.left, depth + 10);
};
console.log(printBinaryTree(buildTree(preorder, inorder)));
