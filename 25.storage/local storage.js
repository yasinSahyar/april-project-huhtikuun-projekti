

/*
local storage kullanimi
! sessionStorage bilgisyari kapatip actigmizda kaybolyour yani saklanmiyor
? localStorage bilgisyari kapatip acsakda kaybolmiyor saklanyor, 
sessionStorage ve localStorage arasindaki farik budur


*/
//deger ekleme
localStorage.setItem("motion1","push up");
localStorage.setItem("motion2","barfix");
localStorage.setItem("motion3","burpee");
localStorage.setItem("motion4","squat");

//deger almak
let value = localStorage.getItem("motion1");
console.log(value);

//deger silmek
localStorage.removeItem("motion4");

//tumuni temizlemek
// localStorage.clear();

let motions = ["push up","barfix","burpee","squat","chin up"];

localStorage.setItem("motions",JSON.stringify(motions));
//json.stringify--buni bir array gibi yapyor

let value2 =JSON.parse(localStorage.getItem("motions"));//alirken"json.parse" yapyor
value2.forEach(function(e){
    console.log(motions);
})