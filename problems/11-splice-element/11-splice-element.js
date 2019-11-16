/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let result = []
    let i = 0
    while(i !== index){
        result[i] = someArr[i]
        i++
    }
    i++
    while(i < someArr.length){
        result[i - 1] = someArr[i]
        i++        
    }
    return result
}
console.log(spliceElement([1, 2, 3, 4, 5], 2));
