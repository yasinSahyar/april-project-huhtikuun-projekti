/*
session storage kullanimi
! sessionStorage bilgisyari kapatip actigmizda kaybolyour yani saklanmiyor
? localStorage bilgisyari kapatip acsakda kaybolmiyor saklanyor, 
sessionStorage ve localStorage arasindaki farik budur


*/
//deger ekleme
sessionStorage.setItem("320","yasin");
sessionStorage.setItem("450","isa");
sessionStorage.setItem("380","kamal");
sessionStorage.setItem("420","tunyaz");
sessionStorage.setItem("365","bilkiz");
sessionStorage.setItem("390","rukyem");
sessionStorage.setItem("440","ayjamal");
// ! storage ekledigimiz degerlerin hepisi string olarak kaydedilyor,numeric olarak saklanmiyor 
sessionStorage.setItem(552,37);
let value1 = sessionStorage.getItem(552);
console.log(typeof value1); //string

//deger silme
sessionStorage.removeItem("450","isa");

//deger almak
// let value = sessionStorage.getItem("380");
let value = sessionStorage.getItem("480");//null,cunku 480 olan deger yok
if(value === null) {
    console.log("deger bulunamadi. ");
}else{
    console.log("deger bulundu : ",value);
}
console.log(value);

//hepisini silme
// sessionStorage.clear();








