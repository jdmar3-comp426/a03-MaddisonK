// import { sumToString, maxAndMin, getIncreasingArray, countArray } from "./src/mild/mild_1.js";

import { removeKey, removeKeyNonDestructive, removeKeys } from "./src/mild/mild_2.js"

import { getMedian, getSum, getStatistics } from "./src/medium/medium_1.js";

import {allCarStats} from "./src/medium/medium_2.js"

// console.log("Testing sumToString: ")
// console.log(sumToString(7,3));

// console.log("Testing getIncreasingArray: ");
// console.log(getIncreasingArray(3,7));

// console.log("Testing maxAndMin: ");
// console.log(maxAndMin("23219381923"));

// console.log("Testing countArray: ")
// console.log(countArray([2,4,3,2,2,0]));

// console.log("Testing removeKey: ");
// let obj = {
//     name: 'Mr. Boss',
//     title: 'boss',
//     age: 33,
//     password: 'pass123'
// };
// removeKey(obj, 'password');
// console.log(obj);

// console.log("Testing removeKeynonDestructive: ");
// let obj = {
//     name: 'Mr. Boss',
//     title: 'boss',
//     age: 33,
//     password: 'pass123'
// };

//  let newObj = removeKeyNonDestructive(obj, 'password');
//  console.log(obj);
//  console.log(newObj);

//  console.log("Testing removeKeys: ");
// obj = {
//     name: 'Mr. Boss',
//     title: 'boss',
//     age: 33,
//     password: 'pass123'
//  };
//  obj = removeKeys(obj, ['password', 'age']);
//  console.log(obj);

let array = [3,2,5,6,2,7,4,2,7,5];

// console.log("Testing getSum: ");
// console.log(getSum(array));

// console.log("Testing getMedian: ");
// console.log(getMedian(array)); // 4.5
console.log(getStatistics(array));

// console.log("Testing allCarStats: ");
// console.log(allCarStats);
 