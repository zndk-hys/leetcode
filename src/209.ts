function minSubArrayLen(target: number, nums: number[]): number {
  let minLength = nums.length + 1;

  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      if (left === right) return 1;
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  if (minLength === nums.length + 1) {
    return 0;
  }

  return minLength;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2;
console.log(minSubArrayLen(4, [1, 4, 4])); // 1;
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0;
