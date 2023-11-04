//true == 1 false == 0 , non-zero = true , zero = false

//Operators in JavaScript + - * / ^ = == ===

// logical operators || && !=

/*var a = 0;
var b = undefined;
var c = NaN;  //not a number
var d = '\0' ; // null character
var e = null ; //null pointer*/


//if(e == c){
  //  console.log("success");
//}

//in other languages null is 0 , not in JavaScript


// logial operaator always return


// break and continue (down below)

for (let i = 0; i < 10; i++) {

    if (i == 6) {
        continue      // 6 will disappear in loop  and will print 1 2 3 4 5 7 8 9 , continue sends back to iteration
    }
    console.log(i);
}


for (let i = 0; i < 10; i++) {   // initialization condition and updation inside for()
    
    if (i == 6)
    {
        break       // will print 1 2 3 4 5 , will come out of the complete execution
    }
    console.log(i);
    
}

// all the fors can be replaced with while 
// all iterations are interchangeable 

let i = 0
while(i<10)   // same as above
{
    if(i==6)
    {break}
    console.log(i);
    i++;
}