

// 1 den 20 kader yazdirma ---------------
let sayac=1;
while(sayac<=20){
    console.log(sayac);
    sayac++;
} 


//----------------------------
// 1 den 20 kader cifitleri ve tek leri yazdiralim
let san = 0;
while(san<=20){
    if(san%2==0){ //cifit sayilari yazdirma,(san%2==1) olursa tek sayi olur
        console.log(san);
    }
    san++;
}


//---------------------------------------------------
let sanduk=1;
while(true){
    console.log(sanduk);
    if(sanduk==7){  //1---7 kader yazdirip duryor,boyle sinir vermezsek sonsuza kader calisir
        break;
    }
    sanduk++;
}


//!------------------continue ----------------kullanimi
//? 1 ,2 ,3,4,5,6,  8,9,10   sadece 7 yi yazdirmasin

let shuzi = 0;

while(shuzi<=10){
    shuzi++;
    
    if(shuzi==7){
       continue;
    }
    console.log(shuzi);
}
