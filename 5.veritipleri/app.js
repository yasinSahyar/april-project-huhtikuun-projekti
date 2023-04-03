/* 
?veri tipleri js

1-string ---> " " 
2-number ----> 1,2,3,4,5...5.8 , 5.9, ....
3-boolean  ---> true & false
4-null
5-undefined
6-object
7-function

*/
let isim =  "yasin sahyar"
console.log(isim);
console.log(typeof isim); 

let sayi1 = 10;
console.log(sayi1);
console.log(typeof sayi1);

let a = "8";
let b = "7";
console.log(a+b); //87
console.log(typeof a);

let degisken = "yasiniz";
let yas = 23;
console.log(degisken + yas);//yasiniz23


console.log(5>2); //true
console.log(9<7); //false

let c = 3;
let d = 12;
let sonuc = c + d ;
console.log(sonuc == 15); //true
console.log(sonuc > 18 ); //false


let e = null; //bos
console.log(e); //null


let f;
console.log(typeof f); //undefined --tanimlanmamis deger



// primitive(iptidayi ,kona,bek addi) ve referans(zamanivi,moderin) tipleri

let insan = {   //object
    soyadi : " sahyar",
    uyrugu : "uyghur",
    yesi   : 33
}
console.log(insan);
console.log(typeof insan);

let rakamlar = [1,2,3,4,5];
console.log(typeof rakamlar);//object

let func = function(){
    console.log("merhaba");
}
console.log(func); //ƒ (){ console.log("merhaba");}
func(); //merhaba
console.log(typeof func); //function







