// promise ----callBack in bi tik ust versiyonu
//promise de Asenkronu ---> senkrona cevirmek icin kullanilir




// let check = true;
// const promise1 = new Promise((resolve, reject)=>{
//     if(check){
//         resolve("promise basarili")
//     }else{
//         reject("promise basarsiz..")
//     }
// })
// console.log(promise1) //promise basarili --"cunku check=true" oldugu icin



//baska bir ornek---promisenin ornek yapisi asagidaki gibi

let check = true;//promise te herhangi bir sikinti yok
// let check = false;//sikinti buyuk


function createPromise(){
    return new Promise((resolve , reject)=>{
        if(check){
            resolve("promise te herhangi bir sikinti yok")
        }else{
            reject("sikinti buyuk")
        }
    })
}

createPromise()
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("her zaman calisir")
})


