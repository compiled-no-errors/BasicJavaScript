//push pop slic splice shift methods in Array
var animals = ["Dogs","Cats","humans","elephants"];
console.log(animals);
console.log(animals.slice(2,3)); // from 2 to 3 excluding 3; this copies from array
console.log(animals)
console.log(animals.splice(2,3))// this cuts from original array and includes the last element
console.log(animals)
const vegtables = ["parth","vaibhav","dipesh","deepika"]
vegtables.push("dhruv") //adds to the array
console.log(vegtables)
console.log(vegtables.pop()) //returns the last elemnt of array nd cuts it from original array
console.log(vegtables)
console.log(vegtables.shift()) //returns the first element array and cuts t from original array
console.log(vegtables)