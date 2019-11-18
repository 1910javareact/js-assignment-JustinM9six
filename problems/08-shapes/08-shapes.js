/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
let output = ``
function printShape(shape, height, character) {
  switch (shape) {
    case `square`:
      //the first for loop is to create each string that will be printed
      for(let i = 0; i < height; i++){
        output += character
      }
      //the second for loop is to print each string the number of times specified
      for(let j = 0; j < height; j++){
        console.log(output);
      }
      break;

    case `triangle`:
      let c = 1
      for(let i = 0; i < height; i++){
        let j = 0
        //with the variable c incrementing every time we loop through this process, the length of
        //the output will increase by one every time until we reach the desired height
        while(j < c){
          output += character
          j++
        }
        console.log(output);
        output = ``
        c++
      }
      break;

    case `diamond`:
      let half = height / 2
      let chars = []
      //first we set the output equal to a string of empty spaces
      for(let i = 0; i < height; i++){
        chars[i] = ` `
      }
      for(let j = 0; j < half; j++){
        //then we need to replace a certain number of those spaces with the given character starting from the middle
        //by incrementing the variable j we can add one more character to the right and left of the string each iteration
        //for the top half of the diamond
        chars[Math.trunc(half)] = character
        chars[Math.trunc(half) - j] = character
        chars[Math.trunc(half) + j] = character
        //for each iteration we need to put the characters of the array back into a string
        output = chars.reduce((accum, ele)=>{
          return accum + ele
        })
        console.log(output);
      }
      //because the middle of the diamond(with all elements equal to the given character) we can immediately start replacing
      //characters in our array with blank spaces to create the bottom half of the diamond
      for(let k = Math.trunc(half); k > 0; k--){
        chars[Math.trunc(half) - k] = ` `
        chars[Math.trunc(half) + k] = ` `
        //same as the top half
        output = chars.reduce((accum, ele)=>{
          return accum + ele
        })
        console.log(output);
      }
      break;
  
    default:
      break;
  }  
}
printShape(`square`, 3, `$`);
printShape(`triangle`, 4, `#`);
printShape(`diamond`, 5, `%`);