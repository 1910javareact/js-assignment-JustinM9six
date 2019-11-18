/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
let temp = []
let result = []
let resultString = ``
function reverseStr(someStr) {
  //we put the original string into a character array to make it easier to work with
  for(let i = 0; i < someStr.length; i++){
      temp[i] = someStr.charAt(i)
  }
  //we make a new array by iterating backwards through our first array
  for(let c = 0; c < temp.length; c++){
      result[c] = temp[temp.length - 1 - c]
  }
  //we put the new array back into a string
  for(let j = 0; j < result.length; j++){
    resultString += result[j]
  }
  return resultString
}
console.log(reverseStr(`testing`));
