/*
 OOP stands for Object-Oriented Programming.
Nesne Yönelimli Programlama---
! OOP---gercek hayati yazlima intigre etmek anlaminda

oop giris

 */

class Insan{ // sinif
    /*
    1.ozellikler
    2.yapici metot
    3.function
    */
    constructor(isim,soyisim,yas,maas){ // yapici metot
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }
    bilgileriGoster(){
        console.log(`
        Isim : ${this.isim}
        Soyisim : ${this.soyisim}
        Yas : ${this.yas}
        Maas : ${this.maas}
        `)
    }
}

const insan1 = new Insan("yasin","Sahyar",33,2500);
const insan2 = new Insan("kamal","Bilal",34,2700);
const insan3 = new Insan("bilkiz","Kasim",33,2400)

 insan1.bilgileriGoster() // Isim : yasin , Soyisim : Sahyar,Yas : 33 ,Maas : 2500
 insan2.bilgileriGoster() //Isim : kamal, Soyisim : Bilal,Yas : 34, Maas : 2700
 insan3.bilgileriGoster() // Isim : bilkiz,Soyisim : Kasim,Yas : 33,Maas : 2400

console.log(insan1.isim) //yasin
console.log(insan2.soyisim) //Bilal
console.log(insan3.yas) // 33