/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1?.val === undefined && list2?.val === undefined) return list1;
    else if (list1?.val === undefined) return list2;
    else if (list2?.val === undefined) return list1;
    let x = 0;
    let temp;
    if (list1.val <= list2.val) {
        temp = list1;
        x = temp;
        list1 = list1.next;
    } else {
        temp = list2;
        x = temp;
        list2 = list2.next;
    }
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }
    if (list1) {
        temp.next = list1;
    } else if (list2) {
        temp.next = list2;
    }
    return x;
};

let data = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 5,
            next: {
                val: 7,
                next: null,
            },
        },
    },
};
let data2 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 6,
            next: {
                val: 8,
                next: null,
            },
        },
    },
};
console.log(JSON.stringify(mergeTwoLists(data, data2)));
