// ----benzin istasyonu ------------

/*
1-Dizel   : 24.53
2-Benzin  : 22.25
3-LPG     : 11.1

gelen musteriden alacagimiz bilgiler;
1-yakit tipi
2-yuklenicek yakit litresi

*/

let Dizel = 24.53, Benzin = 22.25, LPG = 11.1; 
const yeniSatir = "\r\n";

const yakitMetini = "1-Dizel" + yeniSatir
+ "2-Benzin" + yeniSatir
+ "3-LPG" + yeniSatir
+ "yakit turunu seciniz";

let yakitTipi = prompt(yakitMetini);
if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3"){

let yakitLitresi =Number(prompt("yakit litresini giriniz"));
let bakiye = Number(prompt("bakiyenizi giriniz"));
if(yakitTipi =="1"){
    // Dizel
    let odenecekTutar = Dizel * yakitLitresi;
    if(odenecekTutar<bakiye){
        //bakyeniz yeterli
        bakiye = bakiye - odenecekTutar;
        alert ("yakit alma islemi basarli" + yeniSatir
        + "kalan bakiye :" + bakiye );
    }else{
        // bakiye yeterli degil
        alert("bakiyeniz yeterli degil" + yeniSatir
        + "odenicek tutar :" + odenecekTutar + yeniSatir
        + "bakiye : " + bakiye + yeniSatir
        + "eksik tutar :" + (odenecekTutar - bakiye));
    }
} else if(yakitTipi =="2"){
    // Benzin
    let odenecekTutar = Benzin * yakitLitresi
    if(odenecekTutar<bakiye){
        //bakyeniz yeterli
        bakiye = bakiye - odenecekTutar;
        alert ("yakit alma islemi basarli" + yeniSatir
        + "kalan bakiye :" + bakiye );
    }else{
        // bakiye yeterli degil
        alert("bakiyeniz yeterli degil" + yeniSatir
        + "odenicek tutar :" + odenecekTutar + yeniSatir
        + "bakiye : " + bakiye + yeniSatir
        + "eksik tutar :" + (odenecekTutar - bakiye));
    }

} else if(yakitTipi =="3"){
    // LPG
    let odenecekTutar = LPG * yakitLitresi
    if(odenecekTutar<bakiye){
        //bakyeniz yeterli
        bakiye = bakiye - odenecekTutar;
        alert ("yakit alma islemi basarli" + yeniSatir
        + "kalan bakiye :" + bakiye );
    }else{
        // bakiye yeterli degil
        alert("bakiyeniz yeterli degil" + yeniSatir
        + "odenicek tutar :" + odenecekTutar + yeniSatir
        + "bakiye : " + bakiye + yeniSatir
        + "eksik tutar :" + (odenecekTutar - bakiye));
    }
}
}
 else {
    alert("Lutfen gecerli bir yakit turu seciniz !");
}

