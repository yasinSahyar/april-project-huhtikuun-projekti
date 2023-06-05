/*
Asenkron`i sekrona cevrimek 
icin asagdaki gibi 3 yontem vardir

callBack --- promise---async await 
*/
//callBack ---  bir fonctionu bir fonctiona parametre gecrerek asenkron yapiyi senkrona cevririz

 function getName(callBack){ 
    setTimeout(() => {
        //servisten isimi getirdi
        let name = "yasin"; // api web servisten geldi
        callBack(name);
    }, 1000);
 }
 function getSurname(name,callBack){
    setTimeout(() => {
        let Surname = "sahyar" ; // name'e gore surname'i buldu
        callBack(Surname)
    }, 500);
 }

 function getAge(name,surname,callBack){
    setTimeout(() => {
        let age = 33 ; // isimi yasin ve soyismi sahyar olani servisten bulup yasini getirdi
        callBack(age);
    }, 600);
 }


//  getName(getSurname)
getName((name)=>{
    getSurname(name, (Surname)=>{
        getAge(name, Surname , (age)=>{
            console.log(name,Surname,age)
        })
    })
})



//  getName()
//  getSurname()