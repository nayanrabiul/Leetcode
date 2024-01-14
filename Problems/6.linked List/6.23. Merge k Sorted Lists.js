/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
let printhead = (head) => {
    let temp = head;
    while (temp) {
        console.log(temp.val);
        temp = temp.next;
    }
};

let isFinished = (pointerArray) => {
    for (let index = 0; index < pointerArray.length; index++) {
        const node = pointerArray[index];
        if (node) return false;
    }
    return true;
};

var findMinVal = (pointerArray) => {
    let result = {
        val: Number.POSITIVE_INFINITY,
        next: null,
    };
    for (let index = 0; index < pointerArray.length; index++) {
        const node = pointerArray[index];
        if (node) {
            let val = node.val;
            if (result.val > val) {
                result = node;
            }
        }
    }
    let finalVal = result.val;
    result = result.next;
    return finalVal;
};

var mergeKLists = function (lists) {
    let length = lists.length;
    let pointerArray = new Array(length).fill(null);
    let result = {
        val: null,
        next: null,
    };
    for (let index = 0; index < lists.length; index++) {
        pointerArray[index] = lists[index];
    }

    let temp = result;
    while (!isFinished(pointerArray)) {
        let min = findMinVal(pointerArray);
        let newNode = {
            val: min,
            next: null,
        };
        temp.next = newNode;
        temp = temp.next;
    }
    printhead(result.next);
};
let data = [
    {
        val: 1,
        next: {
            val: 4,
            next: {
                val: 5,
                next: null,
            },
        },
    },
    {
        val: 1,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null,
            },
        },
    },
    {
        val: 2,
        next: {
            val: 6,
            next: null,
        },
    },
];

console.log(mergeKLists(data));
