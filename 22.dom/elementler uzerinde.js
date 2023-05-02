//html elementleri uzereinde gezinme

const todo =document.querySelector(".list-group-item");//html 38. satirdaki kod
console.log(todo);


const todoList = document.querySelector(".list-group");
console.log(todoList);


const card = document.getElementsByClassName("card"); //html 16.satir daki "card" sectik
console.log(card);

let value;


//  Anneden cocuklara erismek
value = todoList;
value = todoList.children[0];
value = todoList.children[3];
value = todoList.children[todoList.children.length-1];
value = todoList.children[3].textContent = "degisti"; // "Todu 4" button ismini  "degisti" ya degistirdik

value = todoList.children;  

value = Array.from(todoList.children);//todoList ni Array e degistirdik
value.forEach(function(todo){
    console.log(todo.textContent); //Todo 1 | Todo 2 | Todo 3 | Degistir ---gibi console e yazdirabilirz
})


// cocuklardan Anneye erismek

value = todo;
value = todo.parentElement;//"ul" parentini yakaladik
value = todo.parentElement.parentElement;//"cardBody" parentini yakaladik
value = todo.parentElement.parentElement.parentElement;//"card" parentini yakaladik
value = todo.parentElement.parentElement.parentElement.parentElement;//"row" parentini yakaladik
value = todo.parentElement.parentElement.parentElement.parentElement.parentElement;//"container" parentini yakaladik



//kardesler arasinda gezinme (kardeslere erismek)
value = todo;
value = todo.nextElementSibling;//yanindaki kardesini getir anlamina gelir, "Todo 2" yi gitirdi
value = todo.nextElementSibling.nextElementSibling;// "Todo 3" i cagirdi
value = todo.nextElementSibling.nextElementSibling.nextElementSibling;//"degistir--Todo 4" i cagirdi
value = todo.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;//"null" verir,cunku daha fazla kardesi olmadigi icin

//yukardan assagya dogru secmek

const row = document.querySelector(".row"); // "row" sectik ,15.html

value = row.children[0].children[3].children[0].textContent = "Todo Listesi Basligi Degisti";

let todo2 = row.children[0].children[3].children[2].children[1];//"Todo 2" yi degsen tanimladik , yani sectik
todo2.textContent ="Todo 2 Degisti";// isimini degistirdik
todo2.style.backgroundColor ="lightgrey";// backgroundColor i degistirdik
todo2.style.color ="red";








console.log(value);