/*

do{
    kodlar
}while(kosul);

? do while --de kosul asagda oldugu icin(kodlar yukardin asaga dogru calistigi icin) 
 kosul dogru olmasida kod bir kere calisir ve basa doner,  
 ? while --de kosul yukarda oldugu icin kosul yanlis olursa hic calismaz
 ! bu iki ozellik "while" ile "do while" arasindaki bir birni ayriyan tek fariktir 
 
 let sayac=1;
while(sayac<=20){
    console.log(sayac);
    sayac++;
}


*/
let sayac=1;

do{
    console.log(sayac);
    sayac++;
}while(sayac<=10);



//!------------------------------------------

let yas = 17;

do{
    console.log("ehliyet alabilirsiniz");//17 yas olsada "ehliyet alabilirsiniz" diye bir kere yazdirir 

}while(yas>=18); //sadece 18 yasin uzerindekiler ehliyet alabilir kosulu var aslinda 




//---------------------------------------------------
//1 den 20 kader olan tek sayilarin toplamini bulalim
let san=1;
let toplam=0;
do{
    if(san%2==1){
        toplam+=san;
    }
    san++;
}while(san<=20);
console.log("toplam : ",toplam);


//----------
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
