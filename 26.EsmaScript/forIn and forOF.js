// for in and for off dongusu

let names = ["yasin","kamal","isa","emer","tunyaz"]

// names.forEach(function(name){
//     console.log(name);
// })



// names.forEach(name=> console.log(name)) //arow function



//"for in" dongusu --index numrasini verir
// ! degsenTanimlama,in , diziIsmi ↓ --seklinde gelir
for(let name in names) { //"in" oldugundan sadece index numrasini veriri 
    console.log(name)    // 0,1,2,3,4  index numrasi

    // console.log(name,names[name]) // 0--yasin,1--kamal,..3--tunyaz
}


// ! "for of" dongusu  ----index teki degeri verir
let isimler = ["ayjamal","bilikiz","rukyem","patigul","zohregul"]
for(let isim of isimler){
    console.log(isim);//ayjamal,bilikiz,rukyem,patigul,zohregul

    // console.log(isim,isimler.indexOf(isim));// ayjamal --0,bilikiz--1,zohregul--3
}