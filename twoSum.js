//  I/O Example

//Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

//Edge cases
//There will always be one solution as per instructions.
//So we don't have to deal with there not being an answer
//We don't need to deal with non-integers

//Ouput is a list of indices

//Approaches
//Nested for loops - Goes through and checks every potential pair
//Map function
//Use one for loop and a memo

//Psuedocode

function twoSum(nums, target) {
	// create a new empty object
	let memo = {};
	// loop over the nums array
	for (let i = 0; i < nums.length; i++) {
		// calculate the complement of the target value
		let complement = target - nums[i];
		// if the complement is already found
		if (complement in memo) {
			// return index of complement and current index
			return [memo[complement], i];
		}
		// else add the number to the object
		memo[nums[i]] = i;
	}
}

function anotherTwoSum(nums, target) {
	//loop over nums array
	for (let i = 0; i < nums.length; i++) {
		// loop thru each element again to find if there is another value to target - number
		for (let j = i + 1; j < nums.length; j++) {
			// if there is
			if (nums[i] + nums[j] === target) {
				// return indices of both numbers in array form
				return [i, j];
			}
		}
	}
}

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
console.log("\ncreating an object approach:", twoSum([2, 7, 11, 15], 9));
console.log("2 loops approach:", anotherTwoSum([2, 7, 11, 15], 9));

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
console.log("\ncreating an object approach:", twoSum([3, 2, 4], 6));
console.log("2 loops approach:", anotherTwoSum([3, 2, 4], 6));

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
console.log("\ncreating an object approach:", twoSum([3, 3, 3, 4, 4], 6));
console.log("2 loops approach:", anotherTwoSum([3, 3, 3, 4, 4], 6), "\n");

//Time complexity
//Polynomial
