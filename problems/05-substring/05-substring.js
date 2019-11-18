/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
let stringArr = []
let result = "";
function substring(someStr, startIndex, endIndex) {
    //test if the user entered something other than a string for someStr
    if(typeof(someStr) !== 'string'){
        throw `incorrect input please enter 'substring(string, number, number)'`
    }
    //test if the user entered something other than a number for startIndex
    if(isNaN(startIndex)){
        throw `incorrect input please enter 'substring(string, number, number)'`
    }
    //test if the user entered something other than a number for endIndex
    if(isNaN(endIndex)){
        throw `incorrect input please enter 'substring(string, number, number)'`
    }
    //we put the string into a character array to make it easier to work with
    for(let i = 0; i < someStr.length; i++){
        stringArr[i] = someStr.charAt(i)
    }
    //we delete every element exclusively before the startIndex we were given
    for(let j = 0; j < startIndex; j++){
        stringArr.splice(j, 1)
    }
    //we delete every element inclusively after the endIndex we were given
    //starting from the end of the array and working our way backwards
    for(let k = stringArr.length - 1; k >= endIndex; k--){
        stringArr.splice(k, 1)
    }
    //we put the array back into a string
    for(let c = 0; c < stringArr.length; c++){
        result += stringArr[c]
    }
    return result
}
console.log(substring(`hello`, 1, 3));
