let printBinaryTree = (data, depth = 0) => {
    if (data === null) return;

    printBinaryTree(data.right, depth + 10);
    console.log(" ".repeat(depth), data.val);
    printBinaryTree(data.left, depth + 10);
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
