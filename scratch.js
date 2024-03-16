function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var flatten = function (root) {
    if (!root) return;

    const flattenHelper = (node) => {
        if (!node) return null;

        // Flatten left and right subtrees
        const leftLast = flattenHelper(node.left);
        const rightLast = flattenHelper(node.right);

        // Save the right subtree
        const rightSubtree = node.right;

        // If left subtree exists, move it to the right
        if (node.left) {
            node.right = node.left;
            node.left = null;

            // Link the original right subtree to the end of the new right subtree
            leftLast.right = rightSubtree;
        }

        // Return the last node of the flattened subtree
        return rightLast ? rightLast : leftLast ? leftLast : node;
    };

    flattenHelper(root);
};

// Function to print the flattened linked list
const printFlattenedLinkedList = (head) => {
    while (head) {
        process.stdout.write(head.val.toString() + " -> ");
        head = head.right;
    }
    console.log("None");
};

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);

console.log("Original binary tree:");
// Output the original binary tree
// Preorder traversal: 1 -> 2 -> 3 -> 4 -> 5 -> 6
// Expected output: [1,2,5,3,4,null,6]
printFlattenedLinkedList(root);

flatten(root);

console.log("\nFlattened linked list:");
// Output the flattened linked list
// Preorder traversal: 1 -> 2 -> 3 -> 4 -> 5 -> 6
// Expected output: [1,null,2,null,3,null,4,null,5,null,6]
printFlattenedLinkedList(root);
