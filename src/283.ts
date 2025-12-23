/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
	let write = 0;

	for (let read = 0; read < nums.length; read++) {
		if (nums[write] === 0) {
			if (nums[read] === 0) {
				continue;
			} else {
				nums[write] = nums[read];
				nums[read] = 0;
			}
		}

		write++;
	}
}

const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1);

const nums2 = [0];
moveZeroes(nums2);
console.log(nums2);
