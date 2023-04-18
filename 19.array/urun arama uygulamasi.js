

let urun1 = {
    isim   : " ACER Swift",
    kategori  : "Teknoloji",
    fiyat  :  6.219
}
let urun2 = {
    isim   : " ACER Netro 5",
    kategori  : "Teknoloji",
    fiyat  :  15.350
}
let urun3 = {
    isim   : " ACER Gaming",
    kategori  : "Teknoloji",
    fiyat  :  13.999
}
let urun4 = {
    isim   : " LENEVO Turning",
    kategori  : "Teknoloji",
    fiyat  :  8.589
}
let urun5 = {
    isim   : " LENEVO Lander",
    kategori  : "Teknoloji",
    fiyat  :  12.240
}
let urun6 = {
    isim   : " LENEVO ideaPad",
    kategori  : "Teknoloji",
    fiyat  :  11.240
}

let urunler = [urun1,urun2,urun3,urun4,urun5,urun6];
let filtreliUrunler = [];

let kullaniciUrunIsmi = prompt("bir urun ismi giriniz");

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);



function filtreliUrunleriDoldur(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toLocaleUpperCase().includes(kullaniciUrunIsmi.toLocaleUpperCase(),0)){ //kucuk harif girese hata vermemesi icin toUpprtCace yaptik
            filtreliUrunler.push(urun);
        }
    });
 
}

function filtreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("-------------------------------------------------------");
        console.log("|" + urun.isim +"|"+ urun.fiyat +"|" + urun.kategori);
        console.log("-------------------------------------------------------");

    });
}