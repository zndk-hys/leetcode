function productExceptSelf(nums: number[]): number[] {
	const answer: number[] = Array(nums.length).fill(1);

	let left = 1;
	for (let i = 0; i < nums.length; i++) {
		answer[i] = left;
		left *= nums[i];
	}

	let right = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		answer[i] *= right;
		right *= nums[i];
	}

	return answer;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
