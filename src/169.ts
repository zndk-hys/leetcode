function majorityElement(nums: number[]): number {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const count = (map.get(nums[i]) ?? 0) + 1;

    if (count >= nums.length / 2) {
      return nums[i];
    }

    map.set(nums[i], count);
  }

  throw new Error();
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([2, 2, 2, 1, 1])); // 2
