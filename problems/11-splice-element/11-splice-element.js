/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let result = []
    let i = 0
    //we iterate through the array up to the given index and add those elements into a new array
    while(i !== index){
        result[i] = someArr[i]
        i++
    }
    i++
    //we add the back half of the array into the new array - 1 to prevent the removed index from being undefined
    while(i < someArr.length){
        result[i - 1] = someArr[i]
        i++        
    }
    return result
}
console.log(spliceElement([1, 2, 3, 4, 5], 2));
