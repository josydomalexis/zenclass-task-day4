// Return median of two sorted arrays of the same size.

/* 
# Algorithm : 

1) Merge the two input arrays ar1[] and ar2[].
2) Sort ar1[] and ar2[] respectively.
3) The median will be the last element of ar1[] + the first
   element of ar2[] divided by 2. [(ar1[n-1] + ar2[0])/2].
*/

let arr1 = [3, 21, 45, 7, 1];
let arr2 = [56, 3, 5, 32, 5];

function median(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let arr1LastElement = arr1[arr1.length - 1]; //Last element of first Array
  let arr2FirstElement = arr2[0]; //First element of second Array

  return (arr1LastElement + arr2FirstElement) / 2;
}

console.log(median(arr1, arr2));
