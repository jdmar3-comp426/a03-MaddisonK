// import { sumToString, maxAndMin, getIncreasingArray, countArray } from "./src/mild/mild_1.js";

import { removeKey, removeKeyNonDestructive, removeKeys } from "./src/mild/mild_2.js"

import { getMedian, getSum, getStatistics } from "./src/medium/medium_1.js";

import {allCarStats, moreStats} from "./src/medium/medium_2.js"

import {searchHighPower, searchName, searchByYear, searchMpg} from "./src/medium/medium_3.js"

import mpg_data from "./src/medium/data/mpg_data.js";

import { multiplyBy, everyEven, someEven, filter } from "./src/spicy/spicy_9.js";

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

//  let newObj = removeKeyNonDestructive(obj, 'password');
//  console.log(obj);
//  console.log(newObj);

//  console.log("Testing removeKeys: ");
//  obj = removeKeys(obj, ['password', 'age']);
//  console.log(obj);

// let array = [3,2,5,6,2,7,4,2,7,5];

// console.log("Testing getSum: ");
// console.log(getSum(array));

// console.log("Testing getMedian: ");
// console.log(getMedian(array)); // 4.5

// console.log(getStatistics(array));

// console.log("Testing allCarStats: ");
// console.log(allCarStats);

// console.log(moreStats);

// console.log(searchHighPower(mpg_data, 600, 500));

// console.log(searchMpg(mpg_data, 20, 25));

// console.log(searchName(mpg_data, "tang"));

// console.log(searchByYear(mpg_data, [2012,2009,2010]));

// let mult3 = multiplyBy(3);
// console.log(mult3(3));

// console.log(everyEven([1, 5, 1, 0, 1], x => x === 1));
// console.log(everyEven([1, 1, 0, 1, 1], x => x === 1));

console.log(someEven([4, 3, 2, 1, 0], x => x === 3));
console.log(someEven([1, 0, 1, 0, 1], x => x === 0));
console.log(someEven([1, 1, 1, 1, 0], x => x === 0));
console.log(someEven([0, 0, 0, 0, 0], x => x === 0));


console.log(filter(['yes', 'nope', 'maybe', 'yellow'], x => x[0] === 'y'));
// { pass: ['yes', 'yellow'], fail: ['nope', 'maybe'] }
console.log(filter([1, 90, 5, 31], x => x % 2 === 1));
// { pass: [1, 5, 31], fail: [90] }