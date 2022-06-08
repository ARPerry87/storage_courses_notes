//Median of two sorted arrays 

var findMedianSortedArrays = function(nums1, nums2){
	let result = [...nums1, ...nums2].sort((a,b) =>a-b); //we sort the arrays in ascending order 
	let median = Math.floor(result.length/2); //then we find the middle of the array 

	return result.length % 2 ===0 ? (result[median] + result[median - 1]) / 2 : result[median]; //is the result from an even array? if yes take the two indeces then subtract one and divide by two, or just return the result if not from an even array

};