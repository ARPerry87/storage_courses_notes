/*A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.
*/

var nextPermutation = function(nums) { 
	if(nums.length === 1) return nums; //if the nums length is 1 then we'll just return the array since it can't get any longer and has no permutation 
	let index = nums.length-2; // set index variable to the length of the array - 2 
	while (index >= 0 && nums[index] >= nums [index + 1]) index--; //set a while loop to increment so that while index is greater than or equal to zero AND nums at index is greater than or equal to nums index plus 1 we'll want to decrement the index value;
	if(index >=0) { //begin to iterate over index as long as it's greater than and equal to zero
		let j = nums.length - 1; //let j be equal to nums length - 1, so we want to get one less amount of the total length
		while(nums[index] >= nums[j])j--; //while the index of the nums array is greater than or equal to index of nums j, we're going to decrement j
		[nums[index], nums[j] = nums[j], nums[index]] //then after this we're going to switch nums index and nums j in their location in the array, with nums j and nums index 
	}

	reverse(index+1, nums.length-1); //then finally we're going to reverse index adding 1 to the index and taking one away from the total length. 
	return nums; //finally, we'll return nums as the total array 
};