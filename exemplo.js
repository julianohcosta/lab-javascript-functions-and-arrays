
/*
Bonus: Calculate the sum
should declare a function named sum
should return zero if receives an empty array when called
should return the sum with one number array
should return zero if all elements are zero
should return the sum when passed array of numbers
should return the sum when passed array of strings
should return the sum when passed array of mixed strings and numbers -
should return the sum when passed array of mixed strings, numbers and booleans -
should throw an error when unsupported data type (object or array) present in the array
*/

/**
 * 
 * @param {Array<String>} numbers 
 * @returns 
 */
function sum(numbers) {

    if (numbers.every(el => typeof el === 'string')){
        console.log("here")
        return numbers.reduce((a, b) => {
            console.log(a.length);
            console.log(b.length);
            return a.length + b.length
        }, 0)
      }
}

const numbers = ["son", "156", "dada"]

console.log( sum(numbers))