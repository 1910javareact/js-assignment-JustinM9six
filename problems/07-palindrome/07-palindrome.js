/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
let temp = []
let reverse = []
let concat = ""
let reverseString = ""
function isPalindrome(someStr) {
    for(let k = 0; k < someStr.length; k++){
        if(someStr.charAt(k) !== ` `){
            concat += someStr.charAt(k)
        }
    }
    
    for(let i = 0; i < concat.length; i++){
        temp[i] = concat.charAt(i)
    }
    
    for(let c = 0; c < temp.length; c++){
        reverse[c] = temp[temp.length - 1 - c]
    }
    
    for(let j = 0; j < reverse.length; j++){
      reverseString += reverse[j]
    } 
    if(reverseString === concat){
        return true
    }else{
        return false
    };
    
}
console.log(isPalindrome(`go hang a salami im a lasagna hog`));
