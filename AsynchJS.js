// all asynch functions goes to webAPI or NodeAPI using event loop
//this() points to the object

//setTimeout(), fetch(), DOM API Geolocation Promises Async Await aare all asych JS
/*console.log(12);

setTimeout(() => {
    console.log("abc");
}, 0);*/



//Highest priority are promises or Asynch await means different they have different queue 


console.log(this); //points to the object 

// in node this is empty object while in V8 engine its window object

const A ={

    "abc" : "Mern" ,

     fun  : function () {
        console.log("call karo");
        console.log(this);
     }
}

A.fun()


const B ={

    "abc" : "Mern" ,

     fun1 : ()=> {
        console.log("This is arrow function");
        console.log(this);
     }
}

B.fun1()

// arrow function does not have its own this 







