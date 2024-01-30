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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

var isSameTree = function (p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;

    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var isSubtree = function (root, subRoot) {
    if (root === null && subRoot === null) return true;
    if (root === null) return false;

    if (root.val === subRoot.val) {
        let isSameTreeBool = isSameTree(root, subRoot);
        if (isSameTreeBool) return true;
    }

    let isLeftSame = isSubtree(root.left, subRoot);
    let isRightSame = isSubtree(root.right, subRoot);

    return isLeftSame || isRightSame;
};

let root = {
    val: 1,
    left: null,
    right: {
        val: 1,
        left: null,
        right: {
            val: 1,
            left: null,
            right: {
                val: 1,
                left: null,
                right: {
                    val: 1,
                    left: null,
                    right: {
                        val: 2,
                        left: null,
                        right: null,
                    },
                },
            },
        },
    },
};

let subRoot = {
    val: 1,
    left: null,
    right: {
        val: 1,
        left: null,
        right: {
            val: 1,
            left: null,
            right: {
                val: 2,
                left: null,
                right: null,
            },
        },
    },
};

console.log(isSubtree(root, subRoot));
