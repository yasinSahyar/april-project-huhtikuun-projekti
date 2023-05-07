/*
input eventlari

focus  ----inputa girdiginde 
blur   ----  inputtan ciktiginda 
copy 
paste
cut
select

*/

const todo = document.querySelector("#todoName");

//focus
todo .addEventListener("focus",run);//Todo list sayfasindaki input boslugna tikladigmizda console a "focus" yazyor,

//blur
todo.addEventListener("blur",run);//yukardikisinin aynisini ciktiginda yapyor, kac defa tiklisak su kadar yazyor

//copy
todo.addEventListener("copy",run);//inputni incindeki degeri copyalidgmizda consula "copy" yazyor

//paste
todo.addEventListener("paste",run);//inputni incine copyalidigmiz degeri yapistirdigmizda consula "paste" yazyor

//cut
todo.addEventListener("cut",run);//inputin icndekini "cut" yaptigmiza consol a "cut"yazyor

//select
todo.addEventListener("select",run);//inputin icindeki degeri sectigmizde consola "select"yapyor


function run(e) {
    console.log(e.type);
                        

}