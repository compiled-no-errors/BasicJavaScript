// destructuring object //used a lot in react


const A1 = {
    1 : "abc",
    2 : "cde",
    3 : "fgh"
}

const B1 = {
    A : "MERN" ,
    B : "Kartik" ,
    C : "samar"
}

const {A, B, C} = B1; // destructuring

console.log(B1["C"]);
console.log(C);      //with the help of destruturing 
