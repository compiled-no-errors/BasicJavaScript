//const fetch = require( node-fetch');

async function getData(){ // all the code inside async fucntion is asynchronus
try{
const response = await fetch("http");//await lets it pass until it loads the fecth
console.log(response);
const data = await response.json();
console.log(data);
}
catch(err){
    console.error(err);
}
}

getData();


//asynchronus matlab don't wait if one line has delay 
//javascript is by default synchronus 




