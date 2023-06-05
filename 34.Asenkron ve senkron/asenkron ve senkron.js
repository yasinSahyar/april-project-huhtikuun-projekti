/*
! Javascript senkron calisan bir programlama dilidir

*/
//? senkron calisma sekli

// selamla(); 

// console.log("1")
// console.log("2")
// console.log("yasin")

// function selamla(){
//     console.log("selam")
// }

/*
! asenkron calismasina sebep olanlar
1-timing
2-events(olay)
3-http isteklerinde
*/


//asenkron calisma sekli
console.log("uyghur--hemen calisti")

setTimeout(() => {
    console.log("2 saniye sure doldu calisti")
}, 2000);

setTimeout(() => {
    console.log("3 saniye sure doldu calisti")
}, 3000);

setTimeout(() => {
    console.log("1 saniye sure doldu calisti")
}, 1000);

console.log("hemen calisti")






