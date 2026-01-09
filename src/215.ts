function findKthLargest(nums: number[], k: number): number {
  let offset = 0;

  while(nums.length > 1) {
    const big = [];
    const small = [];
    const base = nums[0];
    let equals = 1;

    for(let i = 1; i < nums.length; i++) {
      if (nums[i] > base) {
        big.push(nums[i]);
      } else if (nums[i] < base) {
        small.push(nums[i]);
      } else {
        equals++;
      }
    }

    if (offset + big.length + 1 <= k && offset + big.length + equals >= k) {
      return base;
    }

    if (offset + big.length + 1 < k) {
      nums = small;
      offset += big.length + equals;
    } else {
      nums = big;
    }
  }

  return nums[0];
};

console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 7)); // 2
console.log(findKthLargest([2,1], 2)); // 1
console.log(findKthLargest([1], 1)); // 1
console.log(findKthLargest([7,6,5,4,3,2,1], 5)); // 3
console.log(findKthLargest([5,2,4,1,3,6,0], 4)); // 3
console.log(findKthLargest([1, 1, 1, 1], 2)); // 1