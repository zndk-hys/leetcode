function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
	if (nums2.length <= 1) return Array(nums1.length).fill(-1);

	const answer = Array(nums1.length).fill(-1);

	for (let i = 0; i < nums1.length; i++) {
		let matchIdx: number | null = null;
		for (let j = 0; j < nums2.length; j++) {
			if (nums1[i] === nums2[j]) {
				matchIdx = j;
				break;
			}
		}

		if (matchIdx !== null) {
			for (let j = matchIdx + 1; j < nums2.length; j++) {
				if (nums1[i] < nums2[j]) {
					answer[i] = nums2[j];
					break;
				}
			}
		}
	}

	return answer;
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1]
