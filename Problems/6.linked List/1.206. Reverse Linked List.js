/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let arra = [];
    arra.push(head.val);
    do {
        head = head.next;
        arra.push(head.val);
    } while (!!head.next);

    arra.sort((a, b) => b - a);
    console.log(arra);

    let node = null;
    let temp = node;
    for (let index = 0; index < arra.length; index++) {
        const element = arra[index];

        temp = {
            val: element,
            next: null,
        };
    }
};

let data = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
};

reverseList(data);
