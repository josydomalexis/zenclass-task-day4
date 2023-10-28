// Sum of all numbers in an array
function sumOfArray(arr) {
  console.log(arr);
  let sum = 0;
  for (i in arr) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumOfArray([2, 3, 4, 5, 6]));
