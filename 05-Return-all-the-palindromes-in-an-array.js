// Return all the palindromes in an array

var arr = ["ada", "name", "josy", "Anandhi", "racecar"];

function ispalindrome(str) {
  let cStr = str;
  str = str.split("");
  str = str.reverse();
  str = str.join("");
  if (cStr == str) {
    return true;
  } else {
    return false;
  }
}

function extractPalindromeStrings(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (ispalindrome(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

extractPalindromeStrings(["arr", "rar"]);
