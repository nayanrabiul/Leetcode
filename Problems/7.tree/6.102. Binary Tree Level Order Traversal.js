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
 * @return {number[][]}
 */

var generateHashMap = (root, level, hashmap) => {
    if (root === null) return;

    // hashmap.set(level, root.val);
    if (hashmap.has(level)) {
        hashmap.get(level).push(root.val);
    } else {
        hashmap.set(level, [root.val]);
    }
    generateHashMap(root.left, level + 1, hashmap);
    generateHashMap(root.right, level + 1, hashmap);
};

var levelOrder = function (root) {
    let result = [];
    let hashmap = new Map();
    generateHashMap(root, 0, hashmap);

    for (let [key, val] of hashmap) {
        result.push(val);
    }
    return result;
};

let root = {
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

console.log(levelOrder(root));
