/*
math metotlari

1-floor
2-ceil
3-round

4-max
5-min

6-random
7-abs
8-sqrt
9-pow

------> PI sayisi

*/
console.log(window);

//floor
let a = 3.85;
console.log(Math.floor(a)); //3--noktadan sonraki sayiyi almiyor

//ceil
let b = 3.12
console.log(Math.ceil(b));//4--noktadan sonraki sayi 0.1 olsada sayiyi butunliyor,bi sonraki butun sayi olyor

//round --yuvarlamak
let c = 3.49;
// let c = 3.51; // 4------yani 0.5 ten buyuk olursa bi sonraki butun sayi oluyor
console.log(Math.round(c));//3- --- yani 0.5 ten kucuk olursa noktadan sonraki sayi kaldiryor

// max & min
console.log(Math.max(1,2,4,6,8,15,35,28,96,52,7));//96 
console.log(Math.min(15,24,9,-5,8,0,35,13,5));//-5 

//Abs--- mutlak deger alma
let e = -8.5;
console.log(Math.abs(e));//8.5 ---mutlak kimet alyor

//sqrt---bir sanning yiltizi
console.log(Math.sqrt(9));//3---
console.log(Math.sqrt(25));//5

//pow---bir sanning  deicisi
console.log(Math.pow(4,2));//16----4 ning 2.dericisi
console.log(Math.pow(2,8));//256 ---2 ning 8.dericisi
console.log(Math.pow(8,5));//32768---8 ning 5.dericisi

//PI sayisi -- π cember turakliki
console.log(Math.PI);// π 3.141592653589793

//random--her calistirdiginda rastgele bir sayi alyor ,0.8124768374859663 gibi her seferinde "0< random < 1" bir deger alyor
console.log(Math.random());
console.log(Math.floor(Math.random()*100));

let randomDeger = Math.random();
let sonuc = randomDeger*100000;
let sonucYuvarla = Math.floor(sonuc);

console.log(randomDeger);   //0.6732763608949752
console.log(sonuc);         //67327.63608949752
console.log(sonucYuvarla);  //67327 
//bu yontemden  her seferinde bir dogurlama kodu gondere bilirz otumatik olarak



