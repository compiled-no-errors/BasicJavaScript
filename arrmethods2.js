var A = [11,21,13,14,51,16,7,8];

var B = A.slice(1,4); // returns from 1st position to 4th position excluding 4th position



var C = A.splice(1,4) ; // returns from 1st to 4th including 4th position
 
// splice cuts while spice copies from original array IMPORTANT difference

console.log(A);

console.log(B);
console.log(C);