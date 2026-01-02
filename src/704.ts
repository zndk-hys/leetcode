function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  while (right > left) {
    const idx = Math.floor((right + left) / 2);

    if (nums[idx] === target) {
      return idx;
    } else if (nums[idx] > target) {
      right = idx;
    } else {
      left = idx + 1;
    }
  }

  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
console.log(search([5], 5)); // 0
console.log(search([-1, 0, 3, 5, 9, 12], 13)); // -1
