function findDisappearedNumbers(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    nums[index] = Math.abs(nums[index]) * -1;
  }

  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      answer.push(i + 1);
    }
  }

  return answer;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
console.log(findDisappearedNumbers([1, 1])); // [2]
