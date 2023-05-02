// element silmek

const todoList = document.querySelector(".list-group");
// const todo = todoList.children[0]; //"Todo 1" i sectik
const todos = document.querySelectorAll(".list-group-item"); //4 tane "Todo" larni sectik

// todos[0].remove();//"Todo 1" derek silindi 
// todos[1].remove();//"Todo 2" derek silindi 

todos[todos.length-1].remove(); //son "Todo " silindi



// diger yontem
// const todo1 = document.querySelector(".list-group-item");
// todo1.remove(); //boylece "Todo 1" i silebilirz


//baska diger yontem
// todoList.removeChild(todos[todos.length-1]);
todoList.removeChild(todos[0]);




console.log(todos);