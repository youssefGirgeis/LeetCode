/*Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const sumOfSqauresTrack = {};
  while (n !== 1 && !sumOfSqauresTrack[n]) {
    sumOfSqauresTrack[n] = 1;
    n = sumOfSquares(n);
  }
  return n === 1;
};

const sumOfSquares = (n) => {
  return n
    .toString()
    .split('')
    .reduce((sum, num) => sum + Math.pow(num, 2), 0);
};

console.log(isHappy(4));
