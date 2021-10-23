/*
Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:
----------
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
*/

// Solution 1 - O(n^2)
var numIdenticalPairs = function (nums) {
  let counter = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) counter++;
    }
  }
  return counter;
};

// soluion 2 - O(n)
var numIdenticalPairs = function (nums) {
  const m = {};
  let counter = 0;
  for (num of nums) {
    if (m[num]) {
      counter += m[num];
      m[num]++;
    } else m[num] = 1;
  }
  return counter;
};
