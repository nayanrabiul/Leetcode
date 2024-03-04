class MaxHeap {
    constructor() {
        this.heap = [];
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
heap.push(4);

heap.print();

heap.pop();
heap.print();
