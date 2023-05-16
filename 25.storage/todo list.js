
//tum elementleri secmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");

const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");//todo listesi input kutusu icindeki filtere islemi icin

let todos=[]; //local storeage kontrol etmek icin bos olarak tanimladik 





runEvents();

function runEvents(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded);//localStorage deki bilgilerin hepisini UI da yazdirma
    secondCardBody.addEventListener("click",removeTodoToUI);//Todo listesinden silme islemi
    clearButton.addEventListener("click",allTodosEverywhere); //tum Todulari temizle metodu
    filterInput.addEventListener("keyup",filter);//input filter islemi, klawyedin elini cektiginde filtir yapsin icin "keyup"metodu
}

function pageLoaded(){
     checkTodosFromStorage();//storage den gucel degeri alabilmek icin bunu olusturduk
     todos.forEach(function(todo){
        addTodoToUI(todo); //localStorage deki tum kodlari UI daki todo listesine yazdirdik

     });
}

function filter(e){
    const filterValue = e.target.value.toLowerCase().trim();//"trim"--input icindeki degerin sag-solundaki boslugu temizlemek icin
    const todoListesi = document.querySelectorAll(".list-group-item");//<li>-icindeki degerleri sec

    if(todoListesi.length>0){
        todoListesi.forEach(function(todo){
            if(todo.textContent.toLocaleLowerCase().trim().includes(filterValue)){
                //
                todo.setAttribute("style","display : block");
            }else{
                todo.setAttribute("style","display : none !important");//"!important" css metodunu degil benim yazdigim kodi calistir
            }
        });
    }else{
        showAlert("warning","filtreleme yapmak icin en az bir todo olmalidir!");
    }
}

function allTodosEverywhere(){
    const todoListesi = document.querySelectorAll(".list-group-item");
    if(todoListesi.length>0){
        //ekrandan silme
          todoListesi.forEach(function(todo){
            todo.remove();
          });
          //storage den silme
          todos=[];
          localStorage.setItem("todos",JSON.stringify(todos));
          showAlert("success","basarli bir sekilde silindi");

    }else{
        showAlert("warning","silmek icin en az bir todo olmalidir!");
    }
    // console.log(todoListesi);
}

function removeTodoToUI(e){
    if(e.target.className==="fa fa-remove"){ //todo listesindeki sadece "X" silme isaretini bastiginda bu islem calissin ,
                                             // baska yere basinca calismasin yani silinmesin diye buni if else yaptik
        // console.log("carpiya basmistir");
        //ekrandan silmek
        const todo = e.target.parentElement.parentElement;
        todo.remove();

        //storage den silmek
        removeTodoToStorage(todo.textContent);

        showAlert("success","Todo basariyla silindi.");
    }
}

function removeTodoToStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach(function(todo,index){ //her seferinde sildimiz degerin index ve todo listesindeki ismi, todos--storage den gelen degerdir
        if(removeTodo===todo){
            todos.splice(index,1);//splice metodunu kullanip sildik , ve 1 tane elaman silyor
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos));
}


function addTodo(e){
    const inputText = addInput.value.trim();
    if(inputText==null || inputText == "") {
         showAlert("danger","lutfen bir deger giriniz!");
    }else{
   //arayuze ekleme 
   addTodoToUI(inputText);

   //storege ekleme
   addTodoToStorage(inputText);

   showAlert("success","Todo Eklendi.");//eklendi mesajini "success--yesil renkte" pupupa  zaman asamali yazdirdik 
   
   }
    //      console.log("submit eventi calisti"); //submit evinti bizi yeni bir sayfaya yonlendircekti
    //     e.preventDefault(); //"preventDefault()"i kullanirak farikli bir sayifaya gitmesini engeledik
    
    e.preventDefault();
}

function addTodoToUI(newTodo){ //"addTodoToUI" arayuze bir todo ekle demek
    /*
    <li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>
        */
    const li = document.createElement("li");
    li.className="list-group-item d-flex justify-content-between";
    li.textContent = newTodo;
                        
    const a = document.createElement("a");
    a.href="#";
    a.className = "delete-item";
                        
    const i = document.createElement("i");
    i.className ="fa fa-remove";
                        
    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);
                        
    addInput.Value = "";   
}

function addTodoToStorage(newTodo){
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function checkTodosFromStorage(){
    if(localStorage.getItem("todos")===null) {
        todos = []; //localStorege bos olursa sifirdin locale kaydetmeye basla
    } else { 
        todos = JSON.parse(localStorage.getItem("todos"));//localStorege bos degilse  uzereine eklemeye basla
              //"JSON.parse" localStorage de daha once mevcut olan degerdir
    }

}

function showAlert(type,message){
    /*
    <div class="alert alert-warning" role="alert">
    This is a warning alert—check it out!
  </div>
  */
   const div = document.createElement("div");//burdaki ulusturdugumuz "div" puppup uyarisi icindir
   // div.className="alert alert-"+type;
   div.className=`alert alert-${type}`;//litirel template  --zaman asamali pupap
   
   div.textContent =message;
   firstCardBody.appendChild(div);

   setTimeout(function(){
    div.remove();
   },2500);    //olusturdugumuz puppupin zaman asamasina uratmak icin ,2.5 saniye sonra pupup kaybolyor
}





