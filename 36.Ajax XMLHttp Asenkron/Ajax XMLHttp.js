//ajax 

function prepareURL(url ,id){
    if(id===null){
        return url;
    }
    return `${url}?postId=${id}`
}


function getComments(url , id){
    let newURL = prepareURL(url , id);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", ()=>{ //callBack function ni 
        if(xhr.readyState===4 && xhr.status===200){ 
            // "readyState===4"--karsitarf(servir) veriyi aldi basarli demek, "status===200" --servirden bize basrli bir kod dondi anlaminda
            console.log(JSON.parse(xhr.responseText));
            // console.log(xhr.responseText); //String  seklinde sonuc veriri
        }
    })

    xhr.open("GET", newURL)
    xhr.send()
}

getComments("https://jsonplaceholder.typicode.com/comments",null);//null verdik butun id larin degerini getirdi, "1" veirisek sadece Id 1 deki degeri getiri 




//---------------------- baska bir ornek 
console.log("baska bir ornek asagda---------------------------------------------------------------------------------")

function getData(url){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange" , ()=>{
        if(xhr.readyState===4 && xhr.status===200){
            console.log(JSON.parse(xhr.response));
        }
    })

    xhr.open("GET", url);
    xhr.send();
}
getData("https://jsonplaceholder.typicode.com/users");//user larin listesini getirdi