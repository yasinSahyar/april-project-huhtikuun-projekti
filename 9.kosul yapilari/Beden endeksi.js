// ---------Beden kitle indeksi hesaplama------------------

let kilo = Number(prompt("kilonizi giriniz")); // number alarak saysal tipe cevirdik
let boy = Number(prompt("boyunuzu metre cinsinden giriniz"));
let sonuc = kilo/(boy*2);

if(sonuc<18.5){
    console.log("ideal kilonun altinda" + sonuc);
}else if(sonuc>18.5 && sonuc<=24.9){
    console.log("ideal kilonun altinda"+ sonuc);
}else if(sonuc>25 && sonuc<=29.9){
    console.log("ideal kiloda"+ sonuc);
}else if(sonuc>30 && sonuc<=39.9){
    console.log("ideal kilonun  ustunde (obez)"+ sonuc);
}else if(sonuc>=40){
    console.log("ideal kilonun cok ustunde (morbid obez)"+ sonuc);
}
