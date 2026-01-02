function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let write = 1;

  for (let read = 1; read < nums.length; read++) {
    if (nums[write - 1] !== nums[read]) {
      nums[write] = nums[read];
      write++;
    }
  }

  return write;
}

const nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1)); // 2
console.log(nums1); // [1,2,_]

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2)); // 5
console.log(nums2); // [0,1,2,3,4,_,_,_,_,_]
