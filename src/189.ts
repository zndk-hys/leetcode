function rotate(nums: number[], k: number): void {
	k = k % nums.length;

	reverce(nums, 0, nums.length - 1);
	reverce(nums, 0, k - 1);
	reverce(nums, k, nums.length - 1);
}

function reverce(nums: number[], x: number, y: number) {
	while (x < y) {
		[nums[x], nums[y]] = [nums[y], nums[x]];
		x++;
		y--;
	}
}

const nums1 = [1, 2, 3, 4, 5, 6, 7];
rotate(nums1, 3);
console.log(nums1); // [5,6,7,1,2,3,4]

const nums2 = [-1, -100, 3, 99];
rotate(nums2, 2);
console.log(nums2); // [3,99,-1,-100]

const nums3 = [1, 2];
rotate(nums3, 7);
console.log(nums3); // [2,1]
