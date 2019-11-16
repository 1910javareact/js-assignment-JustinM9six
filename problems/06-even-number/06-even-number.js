/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
let test
function isEven(someNum) {
    test = someNum / 2
    if(someNum.toString().length >= test.toString().length){
        return true
    } else{
        return false
    }
}
console.log(isEven(400612));
