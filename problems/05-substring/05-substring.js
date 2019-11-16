/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
let stringArr = []
let result = "";
function substring(someStr, startIndex, endIndex) {
    if(typeof(someStr) !== 'string'){
        throw `incorrect input please enter 'substring(string, number, number)'`
    }
    if(isNaN(startIndex)){
        throw `incorrect input please enter 'substring(string, number, number)'`
    }
    if(isNaN(endIndex)){
        throw `incorrect input please enter 'substring(string, number, number)'`
    }
    for(let i = 0; i < someStr.length; i++){
        stringArr[i] = someStr.charAt(i)
    }
    for(let j = 0; j < startIndex; j++){
        stringArr.splice(j, 1)
    }
    for(let k = stringArr.length - 1; k >= endIndex; k--){
        stringArr.splice(k, 1)
    }
    for(let c = 0; c < stringArr.length; c++){
        result += stringArr[c]
    }
    return result
}
console.log(substring(`hello`, 1, 3));
