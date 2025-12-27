function threeSum(nums: number[]): number[][] {
	const answer: number[][] = [];
	const sorted = nums.sort((a, b) => a - b);

	let i = 0;
	while (i < sorted.length - 2) {
		const need1 = 0 - (sorted[i] as number);
		const map = new Map<number, number>();

		for (let j = i + 1; j < sorted.length; j++) {
			const need2 = need1 - (sorted[j] as number);
			if (map.has(need2)) {
				answer.push([
					sorted[i] as number,
					sorted[j] as number,
					sorted[map.get(need2) as number] as number,
				]);
				while (j < sorted.length && sorted[j] === sorted[j + 1]) {
					j++;
				}
			}
			map.set(sorted[j] as number, j);
		}

		i++;
		while (i < sorted.length && sorted[i] === sorted[i - 1]) {
			i++;
		}
	}

	return answer;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0,0,0]]
console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]
