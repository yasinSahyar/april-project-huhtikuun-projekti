/* 

&& : ve
|| : veya 
!  : degil

*/
/* 
mesla ehliyet almak icin 3 sart var hepisi saglanmasi lazim

1-  18 yastan buyuk olmasi
2-  3000 tl ucreti odeye bilmesi
3-  sagligi yerinde olmasi

*/
let yas = 20 ;
let para = 3500;
let sagliklimi = false;
console.log(yas > 18 && para > 3000 && sagliklimi == true);//false --->sagligi "false " oldugu icin false boldi

//  ||--veya  
console.log(5 > 3 && 4 <6 || 2 < 3 ); // true

// ! --degil -yani tersi demek
console.log( !(5<3) );//true 
console.log( !(8>4) ); //false




/* 
karsilastirma operatorleri

==
!= : esit degil mi
> : buyuk mu
< : kucuk mu
>= buyuk esit mi
>= kucuk esit mi

*/
console.log(5!=3);// true

let yas2 = 23;
console.log(yas2!=18);//true

console.log(12<=12);//true
console.log(12>=13);//false
console.log(12<=13);//true



