class MyQueue {
  private a: number[];
  private b: number[];

  constructor() {
    this.a = [];
    this.b = [];
  }

  push(x: number): void {
    this.a.push(x);
  }

  pop(): number {
    this.peek();
    return this.b.pop() as number;
  }

  peek(): number {
    if (this.b.length === 0) {
      while (this.a.length > 0) {
        this.b.push(this.a.pop() as number);
      }
    }
    return this.b[this.b.length - 1];
  }

  empty(): boolean {
    return this.a.length + this.b.length === 0;
  }
}

const queue1 = new MyQueue();
console.log(queue1.push(1)); // null
console.log(queue1.push(2)); // null
console.log(queue1.peek()); // 1
console.log(queue1.pop()); // 1
console.log(queue1.empty()); // false
