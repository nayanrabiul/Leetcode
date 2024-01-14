// O(2n) complexity [ 2 interations ]
// O(2n) memory complexity [ 1 interation ]
// sliding window

let printhead = (head) => {
    let temp = head;
    while (temp) {
        console.log(temp.val);
        temp = temp.next;
    }
};

var removeNthFromEnd = function (head, n) {
    let count = 0;
    let temp = head;
    while (temp) {
        count++;
        temp = temp.next;
    }
    if (count === 1) {
        return null;
    } else if (n === count) {
        head = head.next;
        printhead(head);
        return head;
    }
    let count1 = 1,
        count2 = 1;
    let start = head;
    let end = head;
    let result = head;
    head = head.next;
    while (head) {
        count2++;
        if (count2 - count1 > n) {
            count1++;
            end = end.next;
            start = start.next;
        }
        head = head.next;
    }
    end.next = start.next.next;
    //printhead(x);
    return result;
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
console.log(removeNthFromEnd(data, 5));
