/*
1-bakiye goruntuleme
2-para cekme
3-para yatirma
4-cikis

*/

let yeniSatir = "\r\n";
let bakiye = 1000;

let metin ="1-bakiye goruntuleme" + yeniSatir
+"2-para cekme" + yeniSatir
+"3-para yatirma" + yeniSatir
+"4-cikis" + yeniSatir
+"lutfen bir deger seciniz.";

// alert(metin);

let secim = prompt(metin);
switch(secim){
    case "1":
        alert("bakiyeniz : " + bakiye);
        break; 
    
    case "2":
            let cekilecetTutar = Number(prompt("cekmek istediginiz tutari giriniz :"));
            if(cekilecetTutar<bakiye){
                //para cekme islemi basarlidir
                bakiye = bakiye - cekilecetTutar;
                alert("kalan bakiye :" + bakiye);
            }else{
                alert("yetersiz bakiye !" + yeniSatir
                +"bakiyeniz :" +bakiye +" " + "cekilecek tutar :" + cekilecetTutar);
            }
            break;
    
    case "3" :
        let yatirlacakTutar=Number(prompt("yatirlacak tutari giriniz : "));
        bakiye = bakiye + yatirlacakTutar;
        alert("guncel bakiyeniz :" + bakiye);    
        break;
        
    case "4" :
        alert("sisitemden cikis yaptiniz... ");
        break;
    
    default:
        alert("lutfen 1 ile 4 arasinda deger giriniz !");
        break;
}