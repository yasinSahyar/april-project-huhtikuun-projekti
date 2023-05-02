//document objesi

// console.log(window);

// let value;
// value = document.getElementById("todoAddButton");
// value = 

// console.log(value);

const todo = document.querySelectorAll(".list-group-item")[0];//buyerdin ozgertmekqi objecitni tallaymiz

// console.log(todo);

todo.style.color="red"; // Todo 1 --ning hitini kizl kilduk
todo.style.backgroundColor = "purple"; // Todo 1 --ning background ning rengini ozgertuk
todo.style.fontWeight="bold"; //// Todo 1 --ning hiting kelinliki kelin kilduk
todo.style.paddingTop ="20px";//Todo 1 --ning yukurdin 20px lik bosluk birakti
todo.style.paddingLeft ="70px";//Todo 1 --ning soldin 70px lik bosluk birakti

//------------------------------------------------------------------------------

const todoList = document.querySelector(".list-group");//buyerdin ozgertmekqi objecitni tallaymiz,html 37.kur

console.log(todoList);
todoList.style.marginTop="60px";
todoList.style.marginLeft="50px";

//----------------------------------------------------------

const clearButton = document.querySelector("#todoClearButton");//doc..html ning 60.kurdiki "todoClearButton" talliduk
console.log(clearButton);

clearButton.style.backgroundColor="blue";//backgroundColor ni blue kilduk
clearButton.style.fontWeight="bold";//button ning hitining kelinliki kelin kilduk
clearButton.style.padding="10px";
clearButton.style.borderRadius = "80px";//button kenarini yuvarlak kilduk
