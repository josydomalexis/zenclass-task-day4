// Return all the prime numbers in an array

function isPrimeNumber(number) {
  let points = 0;
  for (i = 1; i <= number; i++) {
    // console.log(i + " % " + number + " => " + (number % i));
    if (number % i == 0) {
      points = points + 1;
      // console.log(points);
    }
  }

  if (points == 2) {
    // console.log(number + " is a prime number");
    return true;
  } else {
    // console.log(number + " is not a prime number");
    return false;
  }
}

console.log(isPrimeNumber(33));
