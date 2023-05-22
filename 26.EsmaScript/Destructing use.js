//destructing kullanimi

//eski yontem
// let langs = ["C#","C++","JavaScript","Python"] //array
// let lang1,lang2,lang3,lang4

// lang1 = langs[0]
// lang2 = langs[1]
// lang3 = langs[2]
// lang4 = langs[3]

// console.log(lang1,lang2,lang3,lang4) //C# C++ JavaScript Python


//destructing ile
let langs = ["C#","C++","JavaScript","Python"] 
let lang1,lang2,lang3,lang4
[lang1,lang2,lang3,lang4] = langs

console.log(lang1,lang2,lang3,lang4) //C# C++ JavaScript Python

//
const hesapla = (a,b)=>{
    const toplam = a+b;
    const cikar = a-b;
    const carp = a*b;
    const bolu = a/b;

    const dizi = [toplam,cikar,carp,bolu]
    return dizi;
}
[a,b,c,d] = hesapla(10,2);

console.log(a,b,c,d); //12 8 20 5

//
const person = {
    firstName : "yasin",
    lastName  : "sahyar",
    salary    : 5000,
    age       : 33
}

// let isim,soyIsim,maas,yas 

// isim = person.firstName
// soyIsim = person.lastName
// maas =person.salary
// yas = person.age

let {firstName:isim, lastName:soyIsim, salary:maas, age:yas} =person //"firstName:isim" firstName ni isim e degistirdik

console.log(isim,soyIsim,maas,yas)

//eger isimini degistermesek ↓
// let{firstName, lastName, salary, age} = person 
// console.log(firstName, lastName, salary, age)
