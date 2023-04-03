// kosul yapilari
let not = 65;
if(not>50){
    console.log("sinavdan gectiniz, notunuz :" + not);
}else{
    console.log("sinavdan gecemediniz, notunuz : " + not);
}

//ehliyet almak icin ornek 
/*
ehliyet almanin iki sarti

yas > 18
para > 3000 tl
*/
let yas = Number(prompt("yasiniz :")); //girilen sayiyi integer yaki sayiya cevirmek icin "Number"cevirme metodu kulanildi
let para = Number(prompt("butceniz :"));

if(yas>=18 && para>=3000){
    alert("ehliyet sinavina katilabilirsiniz !");
}else{
    alert("sartlari sagliyamadiniz icin , ehliyet sinavina katilamazsiniz...")
}

