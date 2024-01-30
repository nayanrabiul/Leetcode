/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    while (root) {
        if (root.val > p.val && root.val > q.val) {
            root = root.right;
        } else if (root.val < p.val && root.val < q.val) {
            root = root.left;
        } else {
            break;
        }
    }
    return root;
};

let data = {
    val: 6,
    left: {
        val: 2,
        left: {
            val: 0,
            left: null,
            right: null,
        },
        right: {
            val: 4,
            left: {
                val: 3,
                left: null,
                right: null,
            },
            right: {
                val: 5,
                left: null,
                right: null,
            },
        },
    },
    right: {
        val: 8,
        left: {
            val: 7,
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

let p = 2;
let q = 8;

let result = lowestCommonAncestor(data, p, q);

let printBinaryTree = (data, depth = 0) => {
    if (data === null) return;

    printBinaryTree(data.right, depth + 10);
    console.log(" ".repeat(depth), data.val);
    printBinaryTree(data.left, depth + 10);
};

printBinaryTree(result);
