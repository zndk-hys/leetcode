function subarraySum(nums: number[], k: number): number {
	let answer = 0;
	const map = new Map<number, number>();
	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];

		const rest = sum - k;
		answer += (map.get(rest) as number) ?? 0;

		if (sum === k) {
			answer++;
		}

		map.set(sum, (map.get(sum) ?? 0) + 1);
	}

	return answer;
}

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([1, 2, 1, 2, 1], 3)); // 4
console.log(subarraySum([1], 0)); // 0
console.log(subarraySum([-1, -1, 1], 0)); // 1
console.log(subarraySum([1, -1, 0], 0)); // 3
console.log(subarraySum([-2, -1, 1, -1, 1, 2], 0)); // 5
