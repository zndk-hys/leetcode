function rotate(nums: number[], k: number): void {
	const map = new Map<number, number>();
	k = k % nums.length;

	for (let i = 0; i < nums.length; i++) {
		const idx = (i - k + nums.length) % nums.length;
		const num = map.has(idx) ? (map.get(idx) as number) : nums[idx];
		map.set(i, nums[i]);
		nums[i] = num;
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
