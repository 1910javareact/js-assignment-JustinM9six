/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
let temp = []
let reverse = []
let concat = ""
let reverseString = ""
function isPalindrome(someStr) {
    //first we remove all whitespaces from the string
    for(let k = 0; k < someStr.length; k++){
        if(someStr.charAt(k) !== ` `){
            concat += someStr.charAt(k)
        }
    }
    //then we put the string into a character array to make it easier to work with
    for(let i = 0; i < concat.length; i++){
        temp[i] = concat.charAt(i)
    }
    //then we reverse the array just like we did in problem 03
    for(let c = 0; c < temp.length; c++){
        reverse[c] = temp[temp.length - 1 - c]
    }
    //then we put the reversed array into a string
    for(let j = 0; j < reverse.length; j++){
      reverseString += reverse[j]
    } 
    //finally we test the reversed string with the original(without whitespaces) and if they match, it is a palindrome
    if(reverseString === concat){
        return true
    }else{
        return false
    };
    
}
console.log(isPalindrome(`go hang a salami im a lasagna hog`));
