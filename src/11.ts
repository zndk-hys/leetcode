function maxArea(height: number[]): number {
	let left = 0;
	let right = height.length - 1;
	let max = 0;

	while (left < right) {
		const leftHeight = height[left] as number;
		const rightHeight = height[right] as number;
		const h = Math.min(leftHeight, rightHeight);
		max = Math.max(max, h * (right - left));

		if (leftHeight < rightHeight) {
			left++;
		} else {
			right--;
		}
	}

	return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
