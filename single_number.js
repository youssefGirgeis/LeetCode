/**
 * Given a non-empty array of integers nums,
 *  every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity 
and use only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n) time complexity
// O(n) space complexity
const singleNumber = function (nums) {
  const nums_count = {};
  for (const num of nums) {
    if (nums_count[num]) nums_count[num] += 1;
    else nums_count[num] = 1;
  }
  for (const n in nums_count) {
    if (nums_count[n] === 1) return parseInt(n);
  }
};

console.log(singleNumber([33, 1, 2, 1, 2]));

// solution 2
// O(n) time complexity
// O(1) space complexity

const singleNumber = (nums) => {
  return nums.reduce((prev, current) => prev ^ current);
};
