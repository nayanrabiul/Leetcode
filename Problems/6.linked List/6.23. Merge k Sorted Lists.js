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
        temp = temp.next;
    }
};

var findMinVal = (pointerArray) => {
    let minIndex = -1;
    let minVal = Number.POSITIVE_INFINITY;

    for (let index = 0; index < pointerArray.length; index++) {
        const node = pointerArray[index];
        if (node && node.val < minVal) {
            minVal = node.val;
            minIndex = index;
        }
    }

    if (minIndex === -1) return false;
    pointerArray[minIndex] = pointerArray[minIndex].next;
    return minVal;
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
    while (1) {
        let min = findMinVal(pointerArray);
        if (min === false) {
            break;
        }
        let newNode = {
            val: min,
            next: null,
        };
        temp.next = newNode;
        temp = temp.next;
    }
    return result.next;
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
