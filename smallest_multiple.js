/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here
  let result = 1;
  let primeFactors = [];

  function isPrime(x) {

    if(x < 2) {
      return false;
    } else {
      for(let i = 2; i < x; i++) {
        if (x % i === 0) {
          return false;
        }
      }
      return true;
    }
  }

  for(let i = 0; i <= ceiling; i++) {
    if(isPrime(i)) {
      primeFactors.push(i);
    } else if(primeFactors.indexOf(Math.sqrt(i)) > -1) {
      primeFactors.push(Math.sqrt(i));
    }
  }
  console.log(primeFactors);

  for(let fac in primeFactors) {
    result *= primeFactors[fac];
  }

  result *= 2;

  return result;
};