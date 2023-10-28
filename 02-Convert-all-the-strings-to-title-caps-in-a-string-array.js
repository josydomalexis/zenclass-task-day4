// Convert all the strings to title caps in a string array
function titleCap(arr) {
  for (i in arr) {
    let text = arr[i];
    arr[i] = text.slice(0, 1).toUpperCase() + text.slice(1);
  }
  console.log(arr);
}

function titleCapSentence(sen) {
  let wordArray = sen.split(" ");
  let sentence = "";
  for (i in wordArray) {
    sentence +=
      wordArray[i].slice(0, 1).toUpperCase() + wordArray[i].slice(1) + " ";
  }

  console.log(sentence);
}

titleCap(["josy", "anandhi", "jonnie", "ronnie"]);
titleCapSentence("Hi! How are you?");
