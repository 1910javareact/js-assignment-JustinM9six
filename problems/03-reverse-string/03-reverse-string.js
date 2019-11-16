/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
let temp = []
let result = []
let resultString = ``
function reverseStr(someStr) {
  for(let i = 0; i < someStr.length; i++){
      temp[i] = someStr.charAt(i)
  }
  for(let c = 0; c < temp.length; c++){
      result[c] = temp[temp.length - 1 - c]
  }
  for(let j = 0; j < result.length; j++){
    resultString += result[j]
  }
  return resultString
}
console.log(reverseStr(`testing`));
