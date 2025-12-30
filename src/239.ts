function maxSlidingWindow(nums: number[], k: number): number[] {
	const stack: number[] = [];
	const answer: number[] = [];
	let stackHead = 0;

	for (let i = 0; i < k; i++) {
		while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
			stack.pop();
		}
		stack.push(i);
	}

	answer.push(nums[stack[stackHead]]);

	for (let i = k; i < nums.length; i++) {
		while (
			stack.length - stackHead > 0 &&
			nums[stack[stack.length - 1]] < nums[i]
		) {
			stack.pop();
		}
		stack.push(i);

		if (stack[stackHead] < i - k + 1) {
			stackHead++;
		}

		answer.push(nums[stack[stackHead]]);
	}

	return answer;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // [1]
console.log(maxSlidingWindow([5, 1, 1, 1, 1], 3)); // [5,1,1]
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)); // [3,3,2,5]
