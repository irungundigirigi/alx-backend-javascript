#!/usr/bin/env node

/**
* Calculates the sum of elements in an array
* @param {number[]} arr - The input array
* @returns {number}  Sum of array
*/

const ArraySum = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum
};

module.exports =  ArraySum;
