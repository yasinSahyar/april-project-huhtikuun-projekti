//event (olay)
//addEventListener() 

// function changeTitle(){
//     document.querySelectorAll('.card-title')[1].textContent='Todo Basligi Degisti..';
    
// }
//"Tüm Todoları Temizle" butununi tikladiktan sonra "Todo Basligi Degisti.."diye title degisyor


//bu da sik kullanilan baska bir yontem 
const clearButton = document.querySelector("#todoClearButton");
clearButton.addEventListener("click", changeTitle);

// //"Tüm Todoları Temizle" butununi tikladiktan sonra "Todo Basligi Degisti.."diye title degisyor


// //baska bir degistirme yontemi
// const clearButton = document.querySelector("#todoClearButton");
// clearButton.addEventListener("click",function(){
//     alert("merhaba");//"Tüm Todoları Temizle" buttonini bastiktan sonra "merhaba" yazisi cikyor
// })



function changeTitle(e) {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.textContent);
    console.log(e.target.className);
    //bu function dan hangi "click" ni bastigini nasil islem olustugunu consulda yazdira bilir
}
