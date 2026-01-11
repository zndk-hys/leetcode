function removeElement(nums: number[], val: number): number {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
}

const nums1 = [3, 2, 2, 3];
console.log(removeElement(nums1, 3)); // 2
console.log(nums1); // [2,2,_,_]

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(nums2, 2)); // 5
console.log(nums2); // [0,1,4,0,3,_,_,_]

const nums3 = [2];
console.log(removeElement(nums3, 3)); // 1
console.log(nums3); // [2]
