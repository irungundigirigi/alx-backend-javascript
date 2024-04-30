#!/usr/bin/env node

const assert = require('assert');
const ArraySum = require('../functions/ArraySum');

/**
* Test module for defined functions
* @module FunctionsTest
*/

describe('Functions', () => {
  /**
   * Test suite for the sumArray function.
   * @memberof module: Functions
   * @inner
   */

  describe('ArraySum', () => {
    /**
    * Test case to ensure sumArray returns the correct sum of array elements.
    * @memberof module:ArrayFunctionsTest~sumArray
    * @inner
    */
    it('should return the sum of all elements in array', () => {
      const arr = [4, 10, 6, 9, 1];
      const sum = ArraySum(arr);
      assert.strictEqual(sum, 30);
    });
  });

});
