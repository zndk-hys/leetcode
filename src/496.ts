function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const stack: number[] = [];
  const map = new Map<number, number>();

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      map.set(stack.pop() as number, nums2[i]);
    }
    stack.push(nums2[i]);
  }

  const answer = nums1.map((num) => {
    return map.has(num) ? (map.get(num) as number) : -1;
  });

  return answer;
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1]
