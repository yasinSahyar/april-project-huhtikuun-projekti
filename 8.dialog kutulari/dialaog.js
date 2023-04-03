/*
-----------dialog kutulari -----------------------

-alert (uyari- popup)
-prompt (popup sorusu)
-confirm (onaylamak)

*/

// console.log(window);

alert("isleminize devam etmeden once kaydetmelisiniz!"); //arayuzde yazili popup cikidu

prompt("siz nelik?")

let isim = prompt("isimizni giriniz :"); //arayuzde isim yazinca yazilan isim console gelyor
let yas = prompt("yasinizi giriniz :");

console.log("isminiz :" +isim);
console.log("yasiniz :" + yas);

//kulancidan alinan deger herzaman string doner
console.log(typeof isim);
console.log(typeof yas);

//confirm
confirm("silmek istedignize eminmisiniz ?"); // evet  yaki hayir boolean cikidu 

let sonuc = confirm("dosyayi indirecekmisiniz ?");
console.log(sonuc); //console evet & hayir baskiningz true & false olarak cikidu



