function maxArea(height: number[]): number {
	let left = 0;
	let right = height.length - 1;
	let max = 0;
	let currentHeight = 1;

	while (right - left >= 1) {
		while (left <= height.length && (height[left] as number) < currentHeight) {
			left++;
		}

		while (right >= 0 && (height[right] as number) < currentHeight) {
			right--;
		}

		if (right - left >= 1) {
			max = Math.max(max, currentHeight * (right - left));
		}

		currentHeight++;
	}

	return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
