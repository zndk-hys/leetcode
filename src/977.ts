function sortedSquares(nums: number[]): number[] {
  const answer = Array(nums.length);
  let left = 0;
  let right = nums.length - 1;

  for (let answerIdx = answer.length - 1; answerIdx >= 0; answerIdx--) {
    const squaredLeft = nums[left] ** 2;
    const squaredRight = nums[right] ** 2;

    if (squaredLeft > squaredRight) {
      answer[answerIdx] = squaredLeft;
      left++;
    } else {
      answer[answerIdx] = squaredRight;
      right--;
    }
  }

  return answer;
}

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
