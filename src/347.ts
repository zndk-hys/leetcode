function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>(); // <要素値, 頻度>

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }

  const bucket: number[][] = Array.from({ length: nums.length + 1 }, () => []); // bucket[頻度] = 要素値[]

  for (const [key, value] of map) {
    bucket[value].push(key);
  }

  const answer: number[] = [];

  for (let i = bucket.length - 1; i > 0; i--) {
    for (let j = 0; j < bucket[i].length; j++) {
      answer.push(bucket[i][j]);
      if (answer.length === k) {
        return answer;
      }
    }
  }

  return answer;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2)); // [1,2]
