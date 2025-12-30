class MyStack {
	private a: number[];
	private b: number[];

	constructor() {
		this.a = [];
		this.b = [];
	}

	push(x: number): void {
		this.a.push(x);
		while (this.b.length > 0) {
			this.a.push(this.b.shift() as number);
		}
		[this.a, this.b] = [this.b, this.a];
	}

	pop(): number {
		return this.b.shift() as number;
	}

	top(): number {
		return this.b[0];
	}

	empty(): boolean {
		return this.b.length === 0;
	}
}

const stack1 = new MyStack();
console.log(stack1.push(1)); // null
console.log(stack1.push(2)); // null
console.log(stack1.top()); // 2
console.log(stack1.pop()); // 2
console.log(stack1.empty()); // false
