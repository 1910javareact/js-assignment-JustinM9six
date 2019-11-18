/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    //this fibonacci sequence is 1, 1, 2, 3, 5, 8, 13...
    //the 0th number in the sequence is 0
    if(n === 0){
        return 0
    }
    if(n <= 2){
        return 1
    }
    //this code will recursively return 1s and add them together until we reach the nth number in the sequence
    //e.g. if we want the 6th number the code will return 1+1+1+1+1+1+1+1 = 8
    return fib(n-1) + fib(n-2)
}
console.log(fib(10));
