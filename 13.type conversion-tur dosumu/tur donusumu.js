/*
------- tur donusumleri-------
string , numbers , booleans , undefined,and null.
object ,function


*/

let a = 5;
let b = 10; // let b = Number("10"); bu da baska bir yontem

// string den number veritipine donusturmek
let c = Number(b);
// console.log(typeof c ); //c-numbber
console.log(a+c);  //15
// alert(a+c);

//-----------------------------------------------------------------------

//parseInt() // sadece butun sayiyi alyor, noktadan sonraki sayilari almiyor 
//console.log(window);

let d = 8;
let e = parseInt("13.5");
console.log(d+e);//21


//parseFloat()
let f = 6.5;
let g = parseFloat("3.9");
console.log(f+g);//10.4


// -------------------------------
//number den string tipine cevrimek
let k = 55;
let l = String(15);//number in onunu string yazarsak sayi string olyor
console.log(k+l);//5515

//baska bir yontem
let j = 15
let h = (24).toString();
console.log(j+h);//1524

//--------------------------------
// boolean den string e cevrimek
let sonuc = String(true);
console.log(typeof sonuc);//string
console.log(sonuc);//true--burdaki true boolean degil string dir

//------------------------------------------
let m = Number("yasin");//sayi olmayan string ni numbera cevremek
console.log(m);//NaN--not a number 


//--------------------------------------
// let rakamlar =[1,2,3,4,5];// bunun tipi object  degerdir
let rakamlar =String([1,2,3,4,5]);//object deger string boldi
console.log(typeof rakamlar);
console.log(rakamlar);//1,2,3,4,5





