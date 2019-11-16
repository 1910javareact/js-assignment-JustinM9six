/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
let temp = []
let reverse = []
let reverseString = ""
function isPalindrome(someStr) {
    for(let i = 0; i < someStr.length; i++){
        temp[i] = someStr.charAt(i)
    }
    for(let c = 0; c < temp.length; c++){
        reverse[c] = temp[temp.length - 1 - c]
    }
    for(let j = 0; j < reverse.length; j++){
      reverseString += reverse[j]
    }
    if(reverseString === someStr){
        return true
    }else{
        return false
    }
}
console.log(isPalindrome(`testing`));
