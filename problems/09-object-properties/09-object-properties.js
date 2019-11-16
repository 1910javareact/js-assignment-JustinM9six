/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    let keys = Object.keys(someObj)
    let values = Object.values(someObj)
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