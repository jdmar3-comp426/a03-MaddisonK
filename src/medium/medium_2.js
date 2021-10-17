import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */

let avgs = [];
let years = [];
let hybridCount = 0;
for (let car of mpg_data) {
    avgs.push(car.highway_mpg, car.city_mpg);
    years.push(car.year);
    if (car.hybrid == true) {
        hybridCount+=1;
    }
}
let avgMpg = getStatistics(avgs)["mean"];
let allYearStats = getStatistics(years);
let ratioHybrids = hybridCount/mpg_data.length;

export const allCarStats = {
    avgMpg: avgMpg,
    allYearStats: allYearStats,
    ratioHybrids: ratioHybrids,
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */

let makerHybrids = [];
for (let car of mpg_data) {
    if (car.hybrid == true) {
        let make = car.make;
        if (makerHybrids.length == 0) {
            makerHybrids.push({make: make, hybrids:[car.id]});
        } else {
            let alreadyExists = false;
            for (let item of makerHybrids) {
                if (item.make == make) {
                    for (let carId of item.hybrids) {
                        if (car.id == carId) {
                            alreadyExists = true;
                            break;
                        }
                        item.hybrids.push(car.id);
                        alreadyExists = true;
                        break;
                    }
                }
            }
            if (!alreadyExists) {
                makerHybrids.push({make: make, hybrids:[car.id]});
            }
        }
    }
}

//sort by hybrid count
let sorted = [];
while (makerHybrids.length > 0) {
    let max = 0;
    let index = 0;
    let i = 0;
    for (let item of makerHybrids) {
        if (item.hybrids.length > max){
            max = item.hybrids.length
            index = i;
        }
        i++;
    }
    sorted.push(makerHybrids.splice(index, 1)[0]);
}

//avgMpgByYearAndHybrid

let yearObj = {};
for (let item of mpg_data) {
    yearObj[item.year] = {
        hybrid: {city: [], highway: []},
        notHybrid: {city: [], highway: []}
    };
}

let yearData = [];
for (let year in yearObj) {
    let t = [];
    for (let item of mpg_data) {
        if (item.year == year) {
            if (item.hybrid == true) {
                yearObj[year].hybrid.city.push(item.city_mpg);
                yearObj[year].hybrid.highway.push(item.highway_mpg);
            } else {
                yearObj[year].notHybrid.city.push(item.city_mpg);
                yearObj[year].notHybrid.highway.push(item.highway_mpg);
            }  
        }
    }
}

for (let year in yearObj) {
    yearObj[year].hybrid.city = getStatistics(yearObj[year].hybrid.city).mean; 
    yearObj[year].hybrid.highway = getStatistics(yearObj[year].hybrid.highway).mean;
    yearObj[year].notHybrid.city = getStatistics(yearObj[year].notHybrid.city).mean; 
    yearObj[year].notHybrid.highway = getStatistics(yearObj[year].notHybrid.highway).mean;
}

export const moreStats = {
    makerHybrids: sorted,
    avgMpgByYearAndHybrid: yearObj
};
