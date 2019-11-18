/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
let test
function isEven(someNum) {
    /*If a number is not evenly divisible by 2(if it is odd) then it will always become a decimal
    * however, the length of any decimal created by dividing an odd number by 2 will always be
    * longer than the number we started with, while even numbers will always be the same length
    * or shorter, so all we need to do is test the lengths of the original number with itself divided 
    * by two and we can tell if the number is even
    */
    test = someNum / 2
    if(someNum.toString().length >= test.toString().length){
        return true
    } else{
        return false
    }
}
console.log(isEven(400612));
