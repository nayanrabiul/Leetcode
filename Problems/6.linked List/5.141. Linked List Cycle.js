/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) return false;

    let fast = head;
    let last = head;

    while (fast) {
        last = last.next;
        fast = fast.next?.next;
        if (fast === last) return true;
    }
    return false;
};

let data = {
    val: 3,
    next: {
        val: 2,
        next: {
            val: 0,
            next: {
                val: -4,
                next: null,
            },
        },
    },
};
data.next.next.next.next = data.next;
console.log(hasCycle(data));
