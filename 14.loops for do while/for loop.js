/*
?tooltip--- mausi uzerine getirince aciklamasi cikan poppup tir

for ornek yapisi-----
! for(degisen;kosul;arttirma-azaltma){
    kodlar
 }

! for(let i=1;i<=10;i++){
    console.log(i);
  }

*/


// for(let i=1;i<=20;i++){
//     console.log(i); //1--20 ye kader yazdirma
//   }
//----------------------------------------------------------
// for(let i=0;i<=25;i=i+2){
//     console.log(i); //0,2,4,6,...24
// }


//------------------------------------------------------------------
/*
yasin
marin
yasin
marin
*/
// for(let i=1;i<=15;i++){
//     if(i%2==1){ //tek sayilarda "yasin" yazssin
//         console.log("yasin")
//     }else{
//         console.log("marin")
//     }
// }


//--------------------------------------------50 den 1 e kader gidelim ve toplamini bulalim
let toplam = 0;
for(let i=50;i>=1;i--){
    toplam = toplam + i;
    console.log(i);
}
console.log("toplam : " ,toplam);