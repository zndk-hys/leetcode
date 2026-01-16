function missingNumber(nums: number[]): number {
  let sum = (nums.length * (nums.length + 1)) / 2;

  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
  }

  return sum;
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
