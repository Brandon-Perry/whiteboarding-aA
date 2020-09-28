
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
// for one for loop and memo 
    //create an empty object and assign it to variable
    //start for loop at zero index, ends at nums.length
    //declare another variable and assign it to target-nums[i]
    //if that variable is in our object, then result is the obj[var] and i
    //if not the case, result obj and obj[num[i]] = i
    //if nothing is true, continue loop.


function twoSum(nums,target) {
    let memo = {}
    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i]
        if (temp in memo) {
            return [memo[temp], i]
        } 

        memo[nums[i]] = i
    }
}


function anotherTwoSum(nums,target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
}



// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
console.log(twoSum([2,7,11,15], 9))
console.log(anotherTwoSum([2,7,11,15], 9))

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
console.log(twoSum([3,2,4], 6))
console.log(anotherTwoSum([3,2,4], 6))

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
console.log(twoSum([3,3,3,4,4], 6))
console.log(anotherTwoSum([3,3,3,4,4], 6))


//Time complexity 
//Polynomial 