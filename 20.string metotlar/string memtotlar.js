/*
string sinifindaki metotlar

charAt()
concat()
indexof()
lastindexof()
toUpperCase()
toLowerCase()
trim()
slice()
substring()
replace()
split()
valueof()
startsWith()
endsWith()

*/

let kurus = "     moderin web gelistirme kursu";
let tarih ="2023";

//charAt
let karakter = kurus.charAt(5);
console.log(karakter);// i

//concat --birlestirmek
let sonuc = kurus.concat(" ",tarih," yasin");
console.log(sonuc); //moderin web gelistirme kursu 2023 yasin

//indexof
let index = kurus.indexOf("w");
console.log(index);//13

//lastindexof
let indexi = kurus.lastIndexOf("k");
console.log(indexi);//28

//toUpperCase
let buyutme = kurus.toUpperCase();
console.log(buyutme);//    MODERIN WEB GELISTIRME KURSU

//! trim- girilen biliglerin onunde bosluk biraksada boslugu hata vermeden birakip sadece girilen bilgiyi aliyor
console.log(kurus.trim());//moderin web gelistirme kursu

//slice--dilimlemek
console.log(kurus);
console.log(kurus.slice(8,14));//erin w   -- 8.indexten 14.kader 14 dahil degil 8,9,10,11,12,13

//substring
console.log(kurus);
console.log(kurus.substring(9,17));//rin web 

//replace--yer degistirmek
console.log(kurus.replace("moderin","zamanivi"));//   zamanivi web gelistirme kursu  

//split 
let dizi = kurus.split(" ");
console.log(dizi);//['', '', '', '', '', 'moderin', 'web', 'gelistirme', 'kursu', '', '', '']

//valueof
console.log(kurus.valueOf());

//startswith
console.log(kurus.startsWith("k"));//false-- satir "k" harfi ile baslamiyor demek

//endswith
console.log(kurus.endsWith("u"));//true -- satir "u" harifi ile bityor demek





