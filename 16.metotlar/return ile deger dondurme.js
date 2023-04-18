//geriye deger donduren metod tanimlamak
//return ---geriye dondurmek


let donenDeger = cube(3);//27
kareAl(donenDeger);

function kareAl(numur){
    let netije = numur * numur;
    console.log(netije);//729
}

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc; //27
    console.log("yasin");//? retrun den sonraki kod calismaz
}
//! 1-return--bir degeri metodun(parantezin) disarsina cikarmak,tasimak icin kullanilir
//? 2- return  --bir metodu bitiren anahtar kelimedir

