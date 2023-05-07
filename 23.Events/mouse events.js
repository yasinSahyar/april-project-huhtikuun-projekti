/*mouse events
DOMContenetLoaded---sayifa yuklendiginde calisyor
load    --- window uzerindin yuklenyor
click
dblclick
mouseover
mouseenter
mouseleave

*/
//DOMContenetLoaded-
// document.addEventListener("DOMContentLoaded",run);

// function run(){
//     alert("sayfa yuklendi");
// }

// //load 
// window.addEventListener("load",run);
// function run(){
//     console.log("sayfa yuklendi");
// }



//click
// const cardTitle = document.querySelectorAll(".card-title")[1];
// cardTitle.addEventListener("click",run);

// function run(e) {
//     console.log(e.type); //"Todo Listesi" uzerine tiklandiginda "click" type yazdiryor ,5 sefer tiklasa "5 click" yazyor
// }



//dblclick -- duble click
// const cardTitle = document.querySelectorAll(".card-title")[1];
// cardTitle.addEventListener("dblclick",run);

// function run(e) {
//     console.log(e.type); //"Todo Listesi" uzerine sadece duble tiklandiginda calisyor
// }



//mouseover , mouseout --- mouseenter
const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run); //mouse uzerinden ckitiginda yada uzerine geldiginde events olarak kaydetyor,icerekler uzerindede degisyor

cardBody.addEventListener("mouseenter",run); // sadece mouse uzerine geldiginde events olarak kaydetyor , icereklere harket etirsede degismiyor 
cardBody.addEventListener("mouseleave",run); // mouse uzerinden ayrildiginda evints olarak kaydetyor


function run(e) {
    console.log(e.type); //mouse ni "Todo Listesi" uzerine getirp harket ettirsek  calisyor ve events olarak sayisini veryor
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.textContent);
    // console.log(e.target.className);
}



