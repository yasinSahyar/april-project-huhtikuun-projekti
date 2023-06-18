// ?  fetch API

//callback ----promise
// ajax(xmlhttprequest) ---fetch api
// fetch api--- servira istek atmak icin kullanilian window objesinde bulunan bir metot
/*
fetch(file)
.then(x => x.text())
.then(y => myDisplay(y));
*/
//or
/*
fetch("http://example.com/movies.json")
.then((response)=>response.json())
.then((data) => console.log(data));

*/

function getStudents(url){
    fetch(url)
    .then((Response)=> Response.json())
    .then((data) => console.log((data)))
    .catch((err) => console.log(err)) //eger yanlissa 
}
getStudents("students.json");



//-----------------------baska bir ornek---------------------------------------
console.log("-------------------------------------------------------------------")


function getInfo(url){
    fetch(url)
    .then((Response)=> Response.json())
    .then((data) => console.log((data)))
    .catch((err) => console.log(err)) //eger yanlissa 
}

getInfo("https://jsonplaceholder.typicode.com/posts")

