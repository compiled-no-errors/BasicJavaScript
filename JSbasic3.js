var n = {
    a : "xy",
    b : "abc",
    5 : "fhfh",
    "name" : "parth"
}

//console.log(n(a));  // expected output ERROR A is not defined 
//console.log(n[a]);    // Expected output ERROR A is not defined 
console.log(n.a);  // will work 
console.log(n[5]);  //will work
console.log(n["5"]); //will work 
console.log(n["a"]); //will work  // best way to write
//console.log(n.5); // will not work thats why best way to wite is above one and second reason is down below
/*some of above work due to internal typecasting */
console.log(n["name"]); // will work

// key is a pointer , key stores address (unrelated to above)