// set 
/*
! Set le Map in tek farki tek bir degeri bir kere tutabilmesi (set)
deger hersey Map le ayni 
*/
const set = new Set();
// add metodu

set.add(true)
set.add(3.14)
set.add("yasin")
set.add("yasin")
set.add("yasin")
set.add("yasin")
set.add("yasin")
set.add(7)
set.add({useName:"urumci",password:"1"});
set.add([1,2,3,4])

//size
console.log(set.size) // ! 6 --ayni degeri sadece bir tane olarak sayidigi icin

//delete
set.delete("yasin")
console.log(set.size) //5

set.delete([1,2,3,4]);//bu refranis tipleri oldugu icin derek silinmez
console.log(set.size) //5

//HAS metodu
console.log(set.has(7)) //true
console.log(set.has("sahyar")) //false--"sahyar"boyle bir deger yok 


//for of --dongusu
for(let value of set){
    console.log(value) //(4) [1, 2, 3, 4]
}

//set i Array e cevirmek
const values = Array.from(set);
console.log(values) //[true, 3.14, 7, {…}, Array(4)]



//forEach--degerleri tek tek ekrana yazdirma
values.forEach((value)=>{
    console.log(value) //true,3.14,7, {useName: 'urumci', password: '1'} , (4) [1, 2, 3, 4]
})


//Array den Set olusturmak
let Array1 = [1,"kamal",true,"mustafa",15,[1,2,3]]

const newSet = new Set(Array1);
console.log(newSet); //Set(6) {1, 'kamal', true, 'mustafa', 15, …}
