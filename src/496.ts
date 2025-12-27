function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
	if (nums2.length <= 1) return Array(nums1.length).fill(-1);

	const answer = Array(nums1.length).fill(-1);
	let left = nums2.length - 2;
	let right = nums2.length - 1;

	while (left >= 0) {
		if (nums2[left] > nums2[right]) {
			right = left;
			left--;
			continue;
		}

		let found1: number | null = null;
		for (let i = 0; i < nums1.length; i++) {
			if (nums1[i] === nums2[left]) {
				found1 = i;
				break;
			}
		}

		if (found1 !== null) {
			for (let i = left + 1; i <= right; i++) {
				if (nums1[found1] < nums2[i]) {
					answer[found1] = nums2[i];
					break;
				}
			}
		}

		left--;
	}

	return answer;
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1]
