class MyMinHeap {
  private size: number;
  private ary: number[];

  constructor(size: number) {
    this.size = size;
    this.ary = [];
  }

  add(val: number) {
    if (this.ary.length < this.size) {
      this.ary.push(val);
      this.heapUp(this.ary.length - 1);
      return;
    }

    if (this.ary[0] < val) {
      this.ary[0] = val;
      this.heapDown(0);
    }
  }

  get() {
    return this.ary;
  }

  private heapUp(i: number) {
    if (i === 0) {
      return;
    }

    const parentIdx = Math.floor((i - 1) / 2);
    if (this.ary[parentIdx] > this.ary[i]) {
      [this.ary[parentIdx], this.ary[i]] = [this.ary[i], this.ary[parentIdx]];
      this.heapUp(parentIdx);
    }
  }

  private heapDown(i: number) {
    const leftIdx = i * 2 + 1;
    const rightIdx = i * 2 + 2;
    let smallestIdx = i;

    if (
      this.ary.length > leftIdx &&
      this.ary[leftIdx] < this.ary[smallestIdx]
    ) {
      smallestIdx = leftIdx;
    }

    if (
      this.ary.length > rightIdx &&
      this.ary[rightIdx] < this.ary[smallestIdx]
    ) {
      smallestIdx = rightIdx;
    }

    if (smallestIdx !== i) {
      [this.ary[smallestIdx], this.ary[i]] = [
        this.ary[i],
        this.ary[smallestIdx],
      ];
      this.heapDown(smallestIdx);
    }
  }
}

class KthLargest {
  private heap: MyMinHeap;

  constructor(k: number, nums: number[]) {
    this.heap = new MyMinHeap(k);

    for (let i = 0; i < nums.length; i++) {
      this.add(nums[i]);
    }
  }

  add(val: number): number {
    this.heap.add(val);
    return this.heap.get()[0];
  }
}

// const heap = new MyMinHeap(3);
// heap.add(2);
// heap.add(1);
// heap.add(3);
// heap.add(6);
// heap.add(7);
// heap.add(2);
// console.log(heap.get());

const obj1 = new KthLargest(3, [4, 5, 8, 2]);
console.log(obj1.add(3));
console.log(obj1.add(5));
console.log(obj1.add(10));
console.log(obj1.add(9));
console.log(obj1.add(4));

const obj2 = new KthLargest(2, [0]);
console.log(obj2.add(-1));
console.log(obj2.add(1));
console.log(obj2.add(-2));
console.log(obj2.add(-4));
console.log(obj2.add(3));
