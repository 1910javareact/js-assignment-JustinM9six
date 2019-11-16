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
      for(let i = 0; i < height; i++){
        output += character
      }
      for(let j = 0; j < height; j++){
        console.log(output);
      }
      break;

    case `triangle`:
      let c = 1
      for(let i = 0; i < height; i++){
        let j = 0
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
      for(let i = 0; i < height; i++){
        chars[i] = ` `
      }
      for(let j = 0; j < half; j++){
        chars[Math.trunc(half)] = character
        chars[Math.trunc(half) - j] = character
        chars[Math.trunc(half) + j] = character
        output = chars.reduce((accum, ele)=>{
          return accum + ele
        })
        console.log(output);
      }
      for(let k = Math.trunc(half); k > 0; k--){
        chars[Math.trunc(half) - k] = ` `
        chars[Math.trunc(half) + k] = ` `
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
printShape(`diamond`, 5, `%`);