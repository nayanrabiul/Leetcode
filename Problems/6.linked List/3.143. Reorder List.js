/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

let printHead = (head) => {
    let temp = head;
    while (temp) {
        console.log(temp.val);
        temp = temp.next;
    }
};

let printTail = (tail) => {
    let temp = tail;
    while (temp) {
        console.log(temp.val);
        temp = temp.prev;
    }
};

var reorderList = function (head) {
    if (head?.val === undefined) return head;

    let temp = head;
    let tail = null;
    temp.prev = null;

    while (temp) {
        if (temp.next) {
            temp.next.prev = temp;
        } else {
            tail = temp;
        }
        temp = temp.next;
    }
    let result = head;
    while (head != tail && head.next != tail) {
        //remove element from last into temp
        temp = tail;
        tail.prev.next = tail.next;
        tail = tail.prev;
        //insert element to head from temps
        temp.next = head.next;
        head.next = temp;
        //reposition head
        head = temp.next;
    }
    printHead(result);
    return result;
};
// [1,2,3,4,5]
let data = {
    val: 1,
    prev: null,
    next: null,
};

reorderList(data);
