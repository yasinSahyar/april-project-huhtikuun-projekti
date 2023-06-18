// promise + XMLHTTPREQUEST(bunu kullanip okuyucaz)

// fetck api 
// Axios

//promise all

function readStuedents(url){
    return new Promise((resolve ,reject)=>{
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", ()=>{
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            console.log("JSON da problem var")
            reject(error);
        }
        xhr.open("GET",url);
        xhr.send();
    })
}

//"students.json" dan okutmak icin
// readStuedents("students.json")
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })


//https://jsonplaceholder.typicode.com/users  dan okutmak icin

function getUsers(url){
    return new Promise((resolve ,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", ()=>{
            try {
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                } 
              }catch (error) {
                reject(error);
                
            }
        
        })
        xhr.open("GET",url);
        xhr.send();
        
    })
}
getUsers("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    console.log(data)
    // data.forEach((user)=>{
    //     console.log(user.name)
    // }) //sadece isimlerini yazdirma
    console.log("daha sonra farikli asenkron kodlarni calistirabilirz")
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    //mail atma kodlarini yazabilirz
})



//baska bir ornek -----------------------------------------------------------------
console.log("----------------------------------------------------------------------------------")

const p1 = Promise.resolve("1.promise basarli")
const p2 = Promise.resolve("2.promise basarli")
const p3 = new Promise((resolve , reject) =>{
    resolve("3.promise basarli")
})
const p4 = Promise.reject("4.promise de hata var reyiz") //reject ---hatali 

Promise.all([p1,p2,p3,p4])
.then((res)=>{
    console.log(res) //hepisi dogruysa "then" e giryor
})
.catch((err)=>{
    console.log(err) //bitanisi bile hatali ise "catch"e giryor
})




