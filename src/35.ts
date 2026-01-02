function searchInsert(nums: number[], target: number): number {
	let left = 0;
	let right = nums.length - 1;
	let idx = Math.floor((right + left) / 2);

	while (left < right) {
		if (nums[idx] === target) {
			return idx;
		}

		if (nums[idx] > target) {
			right = idx - 1;
		} else if (nums[idx] < target) {
			left = idx + 1;
		}

		idx = Math.floor((right + left) / 2);
	}

	if (nums[idx] >= target) {
		return idx;
	}

	return idx + 1;
}

console.log(searchInsert([1], 5)); // 1
console.log(searchInsert([1, 2], 3)); // 2
console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
