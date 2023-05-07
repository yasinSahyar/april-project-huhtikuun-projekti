/*
klavye events

keypress ---sadece harif ve sayilarda tetiklenen eventir
keydown---- kilavyediki harif ve sayilarda isaret belge hepisinde  tetiklenen eventir, tusu bastiginda calisyor
keyup ---- tustan elini kaldirdiginda calisan eventir


*/

// document.addEventListener("keypress",run);

// function run(e) {
//     console.log(e.type); //klayeye bastigmizda tetiklendigini soyliyor console de 
//     console.log(e.key);  //klayeye bastigmiz harifleri  console de yazyor
//     // console.log(e.keyCode);// bastigmiz san ve hariflerin "ascii table" deki karsiligindalki sayiyi yazyor 
//     // console.log(e.which); // "e.keyCode" le ayni

// }

//!"f5" tusunu basinca sayfa yenilenmesin diye bir ornek yapalim
// document.addEventListener("keydown",run);

// function run(e) {
//     // console.log(e.type); 
//     console.log(e.keyCode);  
//     if(e.keyCode==116){  //f5 nin karsilgi 116 oldugu icin bu kode "f5" tushunu basilmasina engel olyor
//         alert("sayfa yenileme engelendi !");
//     }
//     e.preventDefault();//"prevent"--engelemek

// }

//? bastigmiz metini zamanli olarak title de yazdirsin
const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keyup",run);

function run(e) {
    cardTitle.textContent = e.target.value;
    //console da en usteki "Todo List Sayfası" nin altindaki bosluga ne yazarsak title o cikyor
}