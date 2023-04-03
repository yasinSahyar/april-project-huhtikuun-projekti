/* 


+
-
*
/
%----> mod alama operatoru
++
--
**


*/

console.log(5+7); //12

let not1 = 60;
let not2 = 70;
console.log(" notlarinizin toplami :" +(not1 + not2));// notlarinizin toplami :130

let sayi1 = "5";
let sayi2 = 3;
console.log( sayi1 + sayi2); //53 cunku "5" string oldugu icin

let sayi3 = 5;
let sayi4 = 10;
console.log(sayi3 * sayi4); // 50

let numra3 = 100;
let numra4 = 70;
let sonuc = (numra3 - numra4)/2;
console.log(sonuc); // 15


// % mod alama (bulunme kalduki) 
console.log(10%3);//1   --bulunmeden kalan kalduki 1 kalidu
console.log(12%5); // 2
console.log(8%3); // 2
console.log(15%4);//3
console.log(18%4);//2
console.log(18%6);//0

// ++: 1 artirmak icin
let p = 10;
p++;//11
p++;//12
p++;//13
p--;//12
console.log(p); 

let s = 14;
s--;//13
s--;//12
s--; //11
console.log(s);//11

// ** : 2^3 = 8  kuvadirati
console.log(3**3);//27
console.log(4**5);//1024


// -----------------------------------------------------------
/* 


=
== --esittir
===
+=
*=
/=
%=
**=


*/
console.log(5==5);//true
console.log(5==4);//false
let san1 = 5;
let san2 = 10;
let sonuc2 = san1 + san2;
console.log(sonuc2 == 11); // false

// == de sadece icindeki degere bakyor estise true olyor ,veri tiplerine bakmiyor
console.log(3=="3");//true

// === hem veri tiplerine hemde degerlerine bakip degerlendiryor
console.log(5===5);//true
console.log(5==="5");//false

// += 
let sayi6 = 4;
sayi6 += 2;
console.log(sayi6);//6

// -= 
let sayi7 = 8;
sayi7 -= 5;
console.log(sayi7);//3

// *= 
let sayi8 = 6;
sayi8 *= 5;
console.log(sayi8);//30

// /= 
let sayi9 = 25;
sayi9 /= 5;
console.log(sayi9);//5

// %= bolunme kalduki 
let sayi10 = 22;
sayi10 %= 5; // 22/5 tin putun bulunup kelip kalhan san 2
console.log(sayi10);//2


// **= 
let sayi11 = 2;
sayi11 **= 3; // 2 ning 3 dericisi 8
console.log(sayi11);//8








