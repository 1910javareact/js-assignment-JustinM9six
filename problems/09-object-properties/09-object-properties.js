/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    //we put each of the keys and values into seperate arrays
    let keys = Object.keys(someObj)
    let values = Object.values(someObj)
    //we iterate through each array to print each key with their value
    for(let i = 0; i < keys.length; i++){
        console.log(`${keys[i]} = ${values[i]}`);;
        
    }
}
let someObj = {
    prop1: `Henlo`,
    prop2: `Face`,
    prop3: true,
    prop4: 87
}
objectProperties(someObj)