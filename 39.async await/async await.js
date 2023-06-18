// asaync await  --bekleme anlaminda------------- asenkron


// eski yontemle boyle olurdu
document.querySelector("#button").addEventListener("click",()=>{
    //console.log("yazdirdik") //yazdirdik
    fetch("https://jsonplaceholder.typicode.com/posts/1") //post id=1 olani getir dedik
    .then((Response)=>Response.json()) //response tipinde bir promis dondi bize,json metodu kullanip icerdeki veriyi aldik
    .then((post)=>{
        // console.log(post) // ! post i geldi, undan sonra asagdaki fetch ten postin comments i gelecek
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((Response)=> Response.json())
        .then((Comments)=> console.log(Comments))

    })
})





//yeni yontemle ---async await le boyle olur
document.querySelector("#button").addEventListener("click",async ()=>{
   const post = await (await  fetch("https://jsonplaceholder.typicode.com/posts/1")).json() //!"await" i kullanirken function nin onunde mutlaka "async"olmali 
   
   const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();

   console.log(post, comments)
})
