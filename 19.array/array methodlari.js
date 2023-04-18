/*
! tanitim
push      : dizinin sonuna eleman ekler,ayrica dizinin uzunlugnu doner
unshift   : dizinin basina eleman ekler , elaman sayisini geriye doner

pop       : dizinin sonunnda eleman siler ,elaman sayisini doner
shift     : dizinin basindan eleman siler , elaman sayisini doner

splice(index,incidex) : eleman eklemek ve silmek icin kullanir,

toString  : diziyi stringe cevrebiliriz
join      : diziyi stringe cevrir ,farki ise araya eleman ekliyebiliriz

concat    : dizileri birlestirmek icin kullanilir,
slice(dilimlemek) : diziyi isteninen yerden bolup yeni bir dizi olusturur
length    : dizinin ozunlugnu verir
reverse   : dizinin elemanlirnin tersine cevrir
split (bolmek) : belirli bir ifadeye gore bolup diziye cevrimek
idexOf    :  eleman index numrasini verir
iccludes  : verilen elemani iceriyor mu ona bakar

*/
let arabalar = ["bmw","toyota","reanult","mercedes","porsche","lada","volkswagen","ferrari","lamborghini","togg","suzuki"];

// function push(let value){
//     //elindeki diziyi velue yu ekliyor.
//     return length;

// }

//push metot
arabalar.push("opel");
console.log(arabalar);

//unshift
arabalar.unshift("hundai");
console.log(arabalar);

//pop metot
arabalar.pop();
console.log(arabalar);

//shift metot
arabalar.shift();
console.log(arabalar);

//splice metot
console.log(arabalar);
arabalar.splice(3,0,"hundai");


arabalar.splice(2,2,"hundai");
console.log(arabalar);

//toString metotu
console.log(typeof arabalar);//object
let stringarabalar= arabalar.toString();
console.log(typeof stringarabalar);//string


//join metot
let stringArabalar=arabalar.join("-");
console.log(stringArabalar);//bmw-toyota-hundai-mercedes-porsche-lada-volkswagen.........


//concat metot
let arabalar2 = ["tofas","landrover","mini"];
let birlesmisDizi= arabalar.concat(arabalar2);

console.log(birlesmisDizi);//arabalar ve arabalar2 dizisini birlestirdi , toplam 14 deger oldu


//slice dilimlemek 
console.log(arabalar);
let ayribirDizi = arabalar.slice(3);
console.log(ayribirDizi);//3 elementen sonraki kalan 8 tane elementi yazdirdi


//length metot
console.log(arabalar.length); //length ni yazdirir

//reverse metot  --ters cevrime metodu
console.log(arabalar);
arabalar.reverse();
console.log(arabalar);//elemntleri teris dizerek yazdiryor



//split metodu-- bolmek
let isimler = "yasin,kemal,isa,tunyaz,emer";
let isimlerDizi = isimler.split(",");
console.log(typeof isimlerDizi);
console.log(isimlerDizi);


//indexOf --dizinin icinde aradigimiz eleman varmi yokmu ariyor
let index = arabalar.indexOf("bmw");
if(index==0){
    console.log("belirtilen eleman vardir ");
}else{
    console.log("bu eleman yoktur !");
}




//includes metot --dizinin icinde aradigimiz eleman varmi yokmu ariyor
let sonuc = arabalar.includes("bmw");
if(sonuc){
    console.log("belirtilen eleman vardir ");
}else{
    console.log("bu eleman yoktur !");
}