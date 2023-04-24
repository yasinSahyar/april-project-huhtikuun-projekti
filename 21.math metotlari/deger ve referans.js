/*
deger (ilikel,primitive) veri tipleri
string
number
boolean
undefined
null
symbol


-------------------------------------------------------
referans tipler

object
array
function

*/ 
//deger tipler bir birni etkilemez
let a = 5;
let b = a;
console.log("a : " + a); //a : 5
console.log("b :" +b );  //b : 5
console.log("---------------------------");

b = 10;
console.log("a : "+ a); // a : 5
console.log("b :" + b); // b :10

// referans tipler bir birni etkiler
let dizi1 =[1,2,3];
let dizi2 =dizi1;
let dizi3 =dizi2;

dizi3.push(23); //push---eklemek

console.log(dizi1);// [1, 2, 3, 23]
console.log(dizi2);// [1, 2, 3, 23]
console.log(dizi3);// [1, 2, 3, 23]



