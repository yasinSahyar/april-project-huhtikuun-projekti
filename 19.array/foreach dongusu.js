

function topla(){
    console.log(15);
}

let personel1 = {
    isimi   : "yasin",
    soyisim : "sahyar",
    yas     : 33,
}

let personel2 = {
    isimi   : "kamal",
    soyisim : "koc",
    yas     : 34,
}

let personel3 = {
    isimi   : "isa",
    soyisim : "mertoglu",
    yas     : 35,
}

let personel4 = {
    isimi   : "emer",
    soyisim : "caliskan",
    yas     : 36,
}

let personel5 = {
    isimi   : "tunyaz",
    soyisim : "imamoglu",
    yas     : 37,
}

let rakamlar = [0,1,2,3,4,5,6,7,8,9];

let personelArray = [personel1,personel2,personel3,personel4,personel5,true,rakamlar];
console.log(personelArray[4],[5]);//tunyaz ,imamoglu ,37
console.log(personelArray);// hepisini yazdirir


//--------------------------------------------------------------------------------------




let isimler = ["yasin","kamal","isa","emer","tunyaz","lokman","kurban","imin"];
//! asagdaki 3 yontemin hepisi ayini sonucu veriri
//? 1.while--dongusu

// let sayac = 0;
// while(sayac<isimler.length){
//     console.log(isimler[sayac]);
//     sayac++;
// }


//? 2.for dongusu

// for(let i=0;i<isimler.length;i++){
//     console.log(isimler[i]);
// }

//? 3.forEach Dongusu

isimler.forEach(function(isim){
    console.log(isim);
});






