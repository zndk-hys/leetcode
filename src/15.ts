function threeSum(nums: number[]): number[][] {
	const answer: number[][] = [];
	const sorted = nums.sort((a, b) => a - b);

	let i = 0;
	while (i < sorted.length - 2) {
		const need1 = 0 - (sorted[i] as number);
		let left: number = i + 1;
		let right = sorted.length - 1;

		while (left < right) {
			const sum = (sorted[left] as number) + (sorted[right] as number);
			if (sum === need1) {
				answer.push([
					sorted[i] as number,
					sorted[left] as number,
					sorted[right] as number,
				]);
				left++;
				right--;
			} else if (sum < need1) {
				left++;
			} else if (sum > need1) {
				right--;
			}

			while (left < right && sorted[left] === sorted[left - 1]) {
				left++;
			}

			while (right > left && sorted[right] === sorted[right + 1]) {
				right--;
			}
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
