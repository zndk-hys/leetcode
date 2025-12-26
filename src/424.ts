function characterReplacement(s: string, k: number): number {
	const map = new Map<string, number>();
	let maxCount = 0;
	let left = 0;

	for (let right = 0; right < s.length; right++) {
		const rightChar = s[right] as string;
		const count = (map.get(rightChar) ?? 0) + 1;
		map.set(rightChar, count);

		if (count > maxCount) {
			maxCount = count;
		}

		if (maxCount + k <= right - left) {
			const leftChar = s[left] as string;
			map.set(leftChar, (map.get(leftChar) as number) - 1);
			left++;
		}
	}

	return Math.min(maxCount + k, s.length);
}

console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4
console.log(characterReplacement("AABCD", 1)); // 2
