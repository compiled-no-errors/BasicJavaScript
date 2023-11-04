/*const A ={

    "abc" : "Mern" ,

     fun  : function () {
        
        arrow1 = ()=>{
            console.log(this)}
    arrow1();
}
}

A.fun();
*/
//arrow function this exists but of its parent function but not of its own

var a = 6; //free space
this.b = 8;

console.log(this);
this.a = 12;
console.log(a);
console.log(this.a);