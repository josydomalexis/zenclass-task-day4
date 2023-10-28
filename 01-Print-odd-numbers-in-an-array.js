// Print odd numbers in an array
function printOddElements(arr) {
  for (i in arr) {
    if (i % 2) {
      console.log(arr[i]);
    }
  }
}

printOddElements([2, 5, 8, 23, 55, 67, 34]);
