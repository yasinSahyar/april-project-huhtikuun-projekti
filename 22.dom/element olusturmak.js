//dinamik olarak elemnt olusturmak

const cardBody = document.querySelectorAll(".card-body")[1]; //olusturdugmuz "link" i eklemek icin eklenecek yeri sectik
const todoList = document.querySelector(".list-group");

console.log(cardBody); //".cart-body" nin sonuna yeni link eklicegiz



const link = document.createElement("a");//"a" elementi olusturmak
link.id ="goBlogWebSite";  //id sini kendimiz verdik
link.className ="btn btn-dark btn-sm mt-3";
link.href ="https://www.linkedin.com/in/yasinsahyar/"; //tiklandiginda gidecek adresida verdik
link.target ="_blank"; //link e tikladiginda ayiri bir pencere acilsin
link.innerHTML ="kisisel websiteme git";
// link.textContent ="kisisel websiteme git";

cardBody.appendChild(link); // childlarin sonuna burdaki yeni olusturdugmuz "link"i de ekle demek


// !yeni bir Todo eklemek icin yeni bir ornek yapyoruz
const todo = document.createElement("li");
const todoLink = document.createElement("a");
const i = document.createElement("i");

todo.className="list-group-item d-flex justify-content-between";
todo.innerHTML ="Todo 5";

todoLink.href="#"
todoLink.className="delet-item";

i.className="fa fa-remove";

todoLink.appendChild(i);
todo.appendChild(todoLink);

todoList.appendChild(todo); // listeye "Todo 5" i de eklemis olduk



console.log(link);
