function twoSum(nums, target) {
    // Create a Map to store the complement of each number and its index
    const numMap = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement (the value we need to reach the target)
        const complement = target - nums[i];

        // Check if the complement is already in the Map
        if (numMap.has(complement)) {
            // If found, return the indices of the two numbers
            return [numMap.get(complement), i];
        }

        // If not found, add the current number and its index to the Map
        numMap.set(nums[i], i);
    }

    // If no solution is found, return an empty array or handle it as needed
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1] (because nums[0] + nums[1] equals the target 9)
