// kelime sayisi bulma uygulamasi
// harif sayisini bulalim

let metin = "suan da helsinkide javascript egtimi aliyorum";

// let harf=prompt("harif giriniz");

// let sonuc = bul(harf);
// alert("harf sayisi :" + sonuc);

bul("a");//metinde 5 tane "a" var
bul("e");//       3 tane "e" var
bul("s");
bul("i");

function bul(harf){
    let toplam=0;
    for(let i=0; i<metin.length;i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){ //buyuk harif girsede "toLowerCase" ile kucuk harife cevrip 
            toplam+=1;                                           //buyuk kucuk farki yok ederek harif sayisini bulyor
        }
    }
    console.log("harif sayisi : " + toplam);
    // return toplam;
}