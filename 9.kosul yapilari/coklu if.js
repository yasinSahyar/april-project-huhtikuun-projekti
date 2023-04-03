/*
----coklu if kullanmak----

adini ve TCnumrasini 
Ad : bos gecilmez
TC : 11 karekterden olusyor

*/
let ad = prompt("isiminizi giriniz :");
let TC = prompt("TC numranizi giriniz :");
// kontrolEt(ad,TC);

kontrolEt2(ad,TC);

function kontrolEt1(ad ,TC){
    if(ad!=""){
        if(TC.length ==11){
            console.log("isiminiz ve TC basariyla girildi !");
        }else{
            console.log("lutfen gecerli TC giriniz !");
        }

    }else{
        console.log("lutfen isim alanini bos birakmayniz !!!");
    }
}


//     ikinci hil ehtimal 
function kontrolEt2(ad,TC){
    if(ad==""){
        console.log("lutfen isim alanini bos birakmayniz !!");
        return;//burda sonlanicak
    

    }
    if(TC.length !=11){
        console.log("lutfen gecerli TC giriniz !");
        return;
    }
    
        console.log("basariyla giris yaptiniz !");
    
}
