// Concat Array

const A = [2,3,4,6];
const B = [4,6,8,[9,7,[1,2]],11,22,[1,2]];  // flat (1) will give [ 4, 6, 8, 9, 7, [ 1, 2 ], 11, 22, 1, 2 ]



//const C = A.concat(B);
//console.log(C);

//spread operator 

 //const D = [...A, ...B, ...C];  // three dot means spread the array out, works similar to concat but has an advantage over concat
 //console.log(D);




// flat - the keyword helps to make one array if there are arrays inside arrays 

 const E = B.flat(1); // opn arrays inside arrays upto 1 level, infinity instead of 1 will open every array 

 console.log(E);

// isArray checks if array is array or not 


// the below is Object and assign 

const A1 = {
    1 : "abc",
    2 : "cde",
    3 : "fgh"
}

const B1 = {
    4 : "MERN" ,
    5 : "Kartik" ,
    6 : "samar"
}

//const C1 = Object.assign({}, A1, B1)  //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

const D1 = {...A1, ...B1}  //spread operator
console.log(D1);

