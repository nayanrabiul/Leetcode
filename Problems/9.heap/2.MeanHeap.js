class MinHeap {
    constructor() {
        this.heap = [];
    }
    push(val) {
        let arr = this.heap;
        arr.push(val);
        let i = arr.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (arr[i] < arr[parent]) {
                let temp = arr[i];
                arr[i] = arr[parent];
                arr[parent] = temp;
                i = parent;
            } else {
                break;
            }
        }
    }
    pop() {
        let arr = this.heap;
        if (arr.length <= 1) return arr.pop();
        let min = arr[0];
        arr[0] = arr[arr.length - 1];
        arr.pop();
        let i = 0;
        while (1) {
            let child = (i + 1) * 2;
            let child2 = (i + 1) * 2 + 1;
            child -= 1;
            child2 -= 1;
            if (arr[i] > arr[child] || arr[i] > arr[child2]) {
                if (!arr[child2] || arr[child] < arr[child2]) {
                    let temp = arr[child];
                    arr[child] = arr[i];
                    arr[i] = temp;
                    i = child;
                } else {
                    let temp = arr[child2];
                    arr[child2] = arr[i];
                    arr[i] = temp;
                    i = child2;
                }
            } else {
                break;
            }
        }
        return min;
    }
}
let heap = new MaxHeap();
heap.push(5);
heap.push(3);
heap.push(10);
heap.push(1);
heap.push(8);
heap.push(7);
heap.push(6);
console.log(heap.push(4));

console.log(heap.print());
heap.pop();
console.log(heap.pop());
console.log(heap.print());
