//this() points to the object

function add(a,b) {       // function here is keyword for function declaration 
    return a+b ;
}
const b = add (5,6)  // function call // best way to write cause this is common in all programming language

//fuction goes into heap memory

console.log(b);

//function can be written in three syntaxes 


//  another way to write function DOWN BELOW

const B = (function add(a,b){
return a+b;
}
)(2,8)
console.log(B);   // we are wrapping the function in ()

// anonymous functions is down

const square = function (number) {
    return number*number;
};
console.log(square(16));  //fucntion call


//Arrow Function down below 

subtraction = (x,y)=>{    // no let no const , this is arrow function type
    return x-y;
}
console.log(subtraction(3,2));

// the below syntax is used a lot in REACT

console.log((abc=(g,h)=>{return g*h})(3,2));
//wrap in ()

console.log((abc=(o,p)=>(o+p))(8,10)); // this is without return keyword
// when there is curly brackets {} , reurn keyword is required

