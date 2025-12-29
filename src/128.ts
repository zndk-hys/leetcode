function longestConsecutive(nums: number[]): number {
	const set = new Set<number>(nums);

	let max = 0;
	for (const x of set) {
		if (!set.has(x - 1)) {
			let length = 1;
			while (set.has(x + length)) {
				length++;
			}
			max = Math.max(max, length);
		}
	}

	return max;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([1, 0, 1, 2])); // 3
