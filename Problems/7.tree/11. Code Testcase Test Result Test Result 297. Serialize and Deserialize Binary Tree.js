/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    let res = [];
    let queu = [root];
    while (queu.length > 0) {
        let node = queu.shift();
        if (node === null) {
            res.push("null");
            continue;
        }
        queu.push(node.left);
        queu.push(node.right);
        res.push(node.val);
    }
    return res.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let data = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null,
    },
    right: {
        val: 3,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: {
            val: 5,
            left: null,
            right: null,
        },
    },
};

let string = serialize(data);
console.log(string);
let tree = deserialize(string);
console.log(tree);
