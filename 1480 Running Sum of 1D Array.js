/**
 * @param {number[]} nums
 * @return {number[]}
 * @description
 * 1. Create a new array to store the running sum
 * 2. Loop through the array
 * 3. If the index is 0, push the first element into the new array
 * 4. If the index is not 0, push the sum of the current element and the previous element into the new array
 * 5. Return the new array
 * @time O(n)
 * @space O(n)
 */

var runningSum = function (nums) {
	let sum = [];

	for (let i = 0; i < nums.length; i++) {
		if (i === 0) {
			sum.push(nums[0]);
			continue;
		}
		sum.push(nums[i] + sum[i - 1]);
	}

	return sum;
};
