//MERN Lec7 G4G



const A = new Promise(function(resolve,reject){ 
     // resolve and reject are methods not keywords
     console.log("po");
     var a = 1;
     
     if (a == 0){
     resolve({A:"ABC", B:"MERN"});
     }
     
     if (a != 0){
        reject();
     }


})
A.then(function(reciever){  
console.log("hen");
console.log(reciever.A);

}).then(function(reciever2){
console.log(reciever2);
}).catch(function(){
    console.log("yehrejected");
}).finally()




// finally runs at any cost 
// then only runs if resolve is passed

//All asynchronus processes have functions (callback) 

//Resolve is connected to then, to run then it is important to run 
//resolve always before then
// reject connects to catch 






