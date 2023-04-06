/*
faktore----bir sayinin kendisinden 1 e kader carpimi
5=5.4.3.2.1=120
6=6.5.4.3.2.1=720
.....

*/

//6
let sayi = Number(prompt("bir sayi giriniz"));
let carpim=1;

for(let i=1;i<=sayi;i++){
    carpim=carpim*i;
}
alert("sonuc :" +carpim);

//--------------------------------------------------------------
/*
153  - 370  - 407  sayisi "armstrong" dir
"armstrong"--bir sayinin her bir rakaminin kupunun toplami kendisini veryorsa bu "armstrong" dir
153= 1*1*1 + 5*5*5 + 3*3*3
*/

let san = prompt("sayi giriniz");
let toplam = 0;
for(let i=0; i<san.length; i++){
    let rakam = san.charAt(i);
    toplam+=rakam*rakam*rakam;
}
if(san==toplam){
    alert("armstrong sayisidir :)");
}else{
    alert("armstrong sayisi degildir");
}