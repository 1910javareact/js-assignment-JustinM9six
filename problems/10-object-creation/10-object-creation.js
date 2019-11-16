/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
let robert = {
    name: `Robert`,
    age: 18,
}
function Obj(name, age) {
    this.name = name
    this.age = age
}
let gunther = new Obj(`Gunther`, 18)
class Object{
    name
    age
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
let celery = new Object(`Celery`, 18)
console.log(robert);
console.log(gunther);
console.log(celery);
