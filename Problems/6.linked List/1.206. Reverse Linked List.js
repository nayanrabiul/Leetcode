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
    if (head?.val === undefined) return head;

    let result = null;
    let temp = null;

    while (head?.next) {
        temp = head;
        head = head.next;
        temp.next = result;
        result = temp;
    }
    head.next = result;
    return head;
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

console.log(reverseList(data));
