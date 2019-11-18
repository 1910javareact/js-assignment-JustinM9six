/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
let result = 1
function factorial(sumNum) {
    //because result must be initialized to 1 we need a special case for 0 factorial
    if(sumNum === 0){
        return 0
    }
    if(sumNum <= 0){
        return result
    }
    //we recursively multiply our leading total with the next number from sumNum to 0
    result *= sumNum
    return factorial(sumNum - 1)  
}
console.log(factorial(8));
