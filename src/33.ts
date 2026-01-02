function search(nums: number[], target: number): number {
  const minIdx = searchMinIdx(nums);

  let left = 0;
  let right = nums.length;

  while (left < right) {
    const idx = Math.floor((left + right) / 2);
    const actIdx = (idx + minIdx) % nums.length;

    if (nums[actIdx] === target) {
      return actIdx;
    } else if (nums[actIdx] > target) {
      right = idx;
    } else {
      left = idx + 1;
    }
  }

  return -1;
}

function searchMinIdx(nums: number[]) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const idx = Math.floor((left + right) / 2);
    if (nums[idx] < nums[right]) {
      right = idx;
    } else {
      left = idx + 1;
    }
  }

  return left;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1, 3], 3)); // 1
console.log(search([3, 1], 3)); // 0
console.log(search([1, 3, 5], 5)); // 2

// console.log(searchMinIdx([0,1,2,3,4,5])); // 0
// console.log(searchMinIdx([4,5,0,1,2,3])); // 2
// console.log(searchMinIdx([2,3,4,5,0,1])); // 4
