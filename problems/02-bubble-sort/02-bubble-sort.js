/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
let temp;
let j;
function bubbleSort(numArray) {
    for(let i = 0; i < numArray.length; i++){
        let max = -Infinity;
        for(let c = 0; c < numArray.length - i; c++){
            if(numArray[c] > max){
                max = numArray[c]
                j = c
            }
        }
        temp = numArray[numArray.length - 1 - i]
        numArray[numArray.length - 1 - i] = max
        numArray[j] = temp
    }
    return numArray
}

console.log(bubbleSort([12, 4, 8, 32, 16,]));
