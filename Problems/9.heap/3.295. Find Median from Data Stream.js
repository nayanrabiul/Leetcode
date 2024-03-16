/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    push(val) {
        let arr = this.heap;
        arr.push(val);
        let i = arr.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (arr[i] > arr[parent]) {
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
        let max = arr[0];
        arr[0] = arr[arr.length - 1];
        arr.pop();
        let i = 0;
        while (1) {
            let child = (i + 1) * 2;
            let child2 = (i + 1) * 2 + 1;
            child -= 1;
            child2 -= 1;
            if (arr[i] < arr[child] || arr[i] < arr[child2]) {
                if (!arr[child2] || arr[child] > arr[child2]) {
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
        return max;
    }

    length() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}

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

    length() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}

class MedianFinder {
    constructor() {
        this.maxHeap = new MaxHeap();
        this.minHeap = new MinHeap();
    }

    addNum(num) {
        if (this.maxHeap.length() === 0 || num <= this.maxHeap.peek()) {
            this.maxHeap.push(num);
        } else {
            this.minHeap.push(num);
        }
        if (this.maxHeap.length() > this.minHeap.length() + 1) {
            this.minHeap.push(this.maxHeap.pop());
        } else if (this.minHeap.length() > this.maxHeap.length() + 1) {
            this.maxHeap.push(this.minHeap.pop());
        }
    }

    findMedian() {
        if (this.maxHeap.length() === this.minHeap.length()) {
            let n1 = this.maxHeap.peek();
            let n2 = this.minHeap.peek();
            return (n1 + n2) / 2;
        } else if (this.maxHeap.length() > this.minHeap.length()) {
            return this.maxHeap.peek();
        } else {
            return this.minHeap.peek();
        }
    }
}

let medianFinder = new MedianFinder();
medianFinder.addNum(1); // arr = [1]
medianFinder.addNum(2); // arr = [1, 2]
console.log(medianFinder.findMedian());
medianFinder.addNum(3); // arr[1, 2, 3]
console.log(medianFinder.findMedian());
