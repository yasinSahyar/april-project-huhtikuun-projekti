/*
? sorular
1-turkce         40     4 puan
2-matematik      40
3-sosyalbilimler 20
4-fen bilimleri  20

----------->100 puani OSYM veryor
----------->okul ouani max 60 veriyor
*/

let turkceDogru, turkceYanlis=0;
let matematikDogru, matematikYanlis=0;
let sosyalDogru,sosyalYanlis=0;
let fenDogru,fenYanlis=0;

let puan = 0;

let okulPuani = 0;

let yeniSatir = "\r\n";
let mesaj = "TYT puan hesaplama uygulamasina hos geldiniz!" + yeniSatir
    +"1-puan hesaplama" + yeniSatir
    +"2-cikis yap" + yeniSatir

// alert(mesaj);

let secim = prompt(mesaj);

switch(secim){
    case "1":
        okulPuani = Number(prompt("okul puaninizi giriniz"));

        turkceDogru = Number(prompt("turkce dogru sayisi"));
        turkceYanlis = Number(prompt("turkce yanlis sayisi"));

        matematikDogru = Number(prompt("matematik dogru sayisi"));
        matematikYanlis = Number(prompt("matematik yanlis sayisi"));

        sosyalDogru = Number(prompt("sosyal dogru sayisi"));
        sosyalYanlis = Number(prompt("sosyal yanlis sayisi"));

        fenDogru = Number(prompt("fen dogru sayisi"));
        fenYanlis = Number(prompt("fen yanlis sayisi"));
        //30     8/4=2  yanlis 

        let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
        let yanlisSayisi = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
        let kalanDogruSayisi = dogruSayisi - (yanlisSayisi/4);
        puan = (kalanDogruSayisi * 4) + 100 + okulPuani; // 100---OSYM nin verdigi puan
        
        alert("TYT puaniniz : " + puan);

        break;
    
    case "2":
        alert("sistemden cikis yaptiniz !");
        break;

    default :
    alert("lutfen gecerli bir deger giriniz !");
    break;
}
