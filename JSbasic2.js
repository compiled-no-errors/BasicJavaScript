var a = "you" ;
var b1 = "genius";
console.log(a + "are very " + b1);
console.log(`${a} are very ${b1}`);  // sencond way to write string in log using backtick (`)

console.log(typeof(b1)); //prints the data type of b 

/* Primitive Data type are 7 boolean undefined null number string symbol bigInt
Non Primitive Data types of 3 types - Function, Array and Object

Js handles memory in two ways - Heap Memory and Stack Memory

// let is block scope ; var is global scope ; cosnt is block scope */

/*stack is synchronus (top to bottom) 


call by value means it gives a copy and changin copy doesnt channges original adress
call by reference points to the same memory location */

var n = {
a : "xy" ,
b : "abc"
};
var m = n;
m.a = "xyz";
console.log(n.a);
console.log(n.b);
// the above is object and poiuns to the memory location; stored in Heap memory, supports call by reference

//OS manages memory in two options - internal fragmentantion and segmentation <-- DOUBT
// heap memory (also called dynamic memory) increases as runtime <--DOUBT

// Array and Objects are similar but array has defined key while in object , keys are defined by us 