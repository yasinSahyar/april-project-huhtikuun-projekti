
//kilasik yontem
// function yazdir(){
//     console.log("merhaba");
// }
// yazdir();


//Arrow function---okk=> functioni
const yazdir11 = ()=>{
    console.log("merhaba");
}
yazdir11();

//atama Arrow function
const yazdir = (firstName,lastName)=>{
    console.log("merhaba",firstName,lastName);
}
yazdir("yasin","Sahyar");

//{} i kisaltma
const yazdir1 = (firstName,lastName)=> console.log("merhaba",firstName,lastName); //kod bunun gibi tek satir olursa "{}"ni kaldira bilirz
yazdir1("yasin","Sahyar");

// () ve {} i kaldirmak
const yazdir2 = firstName => console.log("merhaba",firstName) // "firstName"gibi tek degisen olursa "()" ve "{}" i kisaltabilirz
yazdir2("yasinkari");

//
const kupAl1 = (x) => {
    return x*x*x
}
console.log("deger ",kupAl1(3)) //deger 27

//daha kolaylastirma
const kupAl2 = x => x*x*x
console.log("deger ",kupAl2(4)) //deger 64

