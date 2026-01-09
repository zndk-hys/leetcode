class KthLargest {
  private ary: (number | null)[];

  constructor(k: number, nums: number[]) {
    this.ary = Array(k + 1).fill(null);

    for (let i = 0; i < nums.length; i++) {
      this.add2(nums[i]);
    }
  }

  add(val: number): number {
    this.add2(val);
    return this.ary[1] as number;
  }

  private add2(val: number) {
    let i = 1;
    while (i < this.ary.length) {
      const currentVal = this.ary[i];
      if (currentVal === null || val > currentVal) {
        [this.ary[i], this.ary[i - 1]] = [this.ary[i - 1], this.ary[i]];
      } else {
        break;
      }
      i++;
    }

    this.ary[i - 1] = val;
  }
}

const obj1 = new KthLargest(3, [4, 5, 8, 2]);
console.log(obj1.add(3));
console.log(obj1.add(5));
console.log(obj1.add(10));
console.log(obj1.add(9));
console.log(obj1.add(4));
