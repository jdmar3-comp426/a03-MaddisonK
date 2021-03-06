import {variance} from "./data/stats_helpers.js";
import { maxAndMin } from "../mild/mild_1.js";


/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum=0;
    for (let item of array) {
        sum+=item;
    }
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let min, max;
    ({max, min} = maxAndMin(array));

   let sorted = [];

   for (let i = min; i <= max; i++) {
        for (let j = 0; j<array.length; j++) {
            if (array[j] == i) {
                sorted.push(array[j]);
            }
        }
   }

   let l = sorted.length;
   if (l % 2 == 0) {
        return (sorted[l/2] + sorted[l/2-1])/2
   } else {
       return sorted[l/2]
   }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let max, min;
    let v = variance(array, getSum(array)/array.length);
    return {length: array.length, sum: getSum(array), mean: getSum(array)/array.length, median: getMedian(array), min: ({max, min} = maxAndMin(array)).min, max: ({max, min} = maxAndMin(array)).max, 
    variance: v, standard_deviation: Math.pow(v, .5)};
}

