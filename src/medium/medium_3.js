import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    let carObjs = [];
    for (let car of car_data) {
        if (car.horsepower >= minHorsepower && car.torque >= minTorque) {
            carObjs.push(car);
        }
    }
    
    let carObjsSorted = [];
    while (carObjs.length > 0) {
        let max = 0;
        let index = 0;
        let i = 0;
        for (let car of carObjs) {
            if (car.horsepower > max) {
                max = car.horsepower;
                index = i;
            }
            i++;
        }
        carObjsSorted.push(...carObjs.splice(index,1));
    }
    return carObjsSorted;
}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    let carObjs = [];
    for (let car of car_data) {
        if (car.city_mpg >= minCity && car.highway_mpg >= minHighway) {
            carObjs.push(car);
        }
    }
    
    let carObjsSorted = [];
    while (carObjs.length > 0) {
        let max = 0;
        let index = 0;
        let i = 0;
        for (let car of carObjs) {
            if (car.highway_mpg > max) {
                max = car.horsepower;
                index = i;
            }
            i++;
        }
        carObjsSorted.push(...carObjs.splice(index,1));
    }
    return carObjsSorted;
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    let carNames = [];
    for (let car of car_data) {
        if (car.id.toLowerCase().includes(searchTerm)) {
            carNames.push(car.id);
        }
    }
    //sort
    let sortedNames = [];
    while (carNames.length > 0) {
        let m = Number.MAX_SAFE_INTEGER;
        let p = 0;
        let i = 0;
        for (let name of carNames) {
            if (name.toLowerCase().indexOf(searchTerm) < m) {
                m = name.toLowerCase().indexOf(searchTerm);
                p = i;
            }
            i++;
        }
        sortedNames.push(...carNames.splice(p,1));
    }
    return sortedNames;
}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {
    let carObjs = [];
    years = years.sort();
    console.log(years);
    for (let year of years) {
        for (let car of car_data) {
            if (car.year == year) {
                carObjs.push(car);
            }
        }
    }
    return carObjs;
}
