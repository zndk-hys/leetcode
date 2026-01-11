function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    count += candidate === nums[i] ? 1 : -1;
  }

  return candidate;
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([2, 2, 3, 1, 1])); // 2
console.log(majorityElement([5, 5, 5, 7, 7, 7, 7, 1, 1, 1, 7, 7])); // 7
