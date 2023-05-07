//Elementleri degistirme

const cardBody = document.querySelectorAll(".card-body")[1];

//<h5 class="card-title">Todo Listesi</h5>
const newTitle = document.createElement("h2");
newTitle.className="card-title";
newTitle.textContent="Todo Listesi-Yeni";

// console.log(cardBody.childNodes[1]);//? h2.card-title, eki elmintin not tipini bu sekilde buluruz,[x] indexi "childNodes"dan seceriz

cardBody.replaceChild(newTitle,cardBody.childNodes[1]);// ! "newTitle"yenisi, "cardBody.childNodes[1]" eskisinin indexi
// eskisinin yeri herzaman "childNodes[x]" sekilinde gelir
//"replaceChild"yer degistimek anlaminda ,




