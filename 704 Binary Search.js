/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @description
 * 1. Create a left pointer and a right pointer
 * 2. Loop through the array
 * 4. Create a mid pointer
 * 5. If the mid pointer is equal to the target, return the mid pointer
 * 6. If the mid pointer is greater than the target, move the right pointer to the left by 1
 * 7. If the mid pointer is less than the target, move the left pointer to the right by 1
 * 3. If the left pointer is greater than the right pointer, return -1
 * @time O(log n)
 * @space O(1)
 * @example
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5
 * left = 0, right = 9, mid = 4
 *
 * Link: https://leetcode.com/problems/binary-search/
 */
var search = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] > target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return -1;
};
