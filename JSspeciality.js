const n = {
    a : "xy",
    b : "abc",
    5 : "fhfh",
    "name" : "parth"
}

n.a = "xzyy"

//console.log(n["a"]); //Usually const remains constant (fixed) in value but when passed in call by reference it can be changed
// the above is only applied in JS

var a = [1,2,3,[4,5],6,"MERN"] // array inside array and also string 

// the above is speciality only in javascript (JS) language


console.log(a[3]);  // it is type of object where just key is not defined byy us 

a.push(9); // adds to the left
console.log(a);
a.unshift(0);
console.log(a); // adds to the right and changes the array lenght (opposite of push)
a.pop(); // last element is removed
console.log(a);
