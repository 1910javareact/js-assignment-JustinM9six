/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
let temp;
let j;
function bubbleSort(numArray) {
    //we need to repeat the sorting process once for each number in our array
    for(let i = 0; i < numArray.length; i++){
        let max = -Infinity;
        //we need to repeat the comparing process for each number except the ones we have already sorted at the end
        for(let c = 0; c < numArray.length - i; c++){
            //if the current number is larger than the largest number we have found so far, it becomes the largest
            if(numArray[c] > max){
                max = numArray[c]
                //we need to save where we found the largest number
                j = c
            }
        }
        //we put the number we found at the end, and put the number that was at the end where we found the largest
        temp = numArray[numArray.length - 1 - i]
        numArray[numArray.length - 1 - i] = max
        numArray[j] = temp
    }
    return numArray
}

console.log(bubbleSort([12, 4, 8, 32, 16,]));
