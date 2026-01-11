function findMin(nums: number[]): number {
  let base = nums[0];
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const target = Math.floor((left + right) / 2);
    if (base > nums[target]) {
      right = target - 1;
      base = nums[target];
    } else {
      left = target + 1;
      base = Math.min(base, nums[left]);
    }
  }

  return base;
}

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([2, 1])); // 1
console.log(findMin([1])); // 1
