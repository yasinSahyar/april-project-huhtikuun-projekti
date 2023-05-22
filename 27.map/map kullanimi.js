// map ----->key(anahtar) value (deger) ,array tiplerindin bitanesidir


const map1 = new Map();

//set ¨
// map1.set(1,"yasin")  //! set(key:any,value:any) --map sekli
// map1.set(true,5)
// map1.set([1,2,3],{firstName : "yasin",lastName :"sahyar"})
// map1.set(true,"5")

let value;

map1.set(34,"istanbul")
map1.set(35,"izmir")
map1.set(06,"ankara")
map1.set(01,"adana")


//get
console.log(map1.get(6))//ankara
console.log(map1.get(35)) //izmir


//size
value = map1.size; //4 --tane deger var


//delete
value = map1.delete(34)//true--34 key degerindeki "istanbul"u sildim anlaminda

value = map1.size; //3 --tane deger var--34 silindigi icin

console.log(value); 



//HAS metodu---bir map in icersinde bir deger varmi anlaminda
console.log(map1.has(35))//true--map1 in icinde 35--izmir vardir
console.log(map1.has(30))// false



//for of ---map uzerinde donebiliriz
for(let [key,value] of map1){
    console.log(key,value) //35 'izmir',6 'ankara',1 'adana'
}


const keys = Array.from(map1.keys())
console.log(keys)

keys.forEach((key)=>{
    console.log(key) //(3) [35, 6, 1] ------ 35,6,1
})

for(let value of map1.values()){
    console.log(value) // 'izmir', 'ankara', 'adana'
}



//array i map e cevrimek
const array2 = [
    [34,"istanbul"],
    [35,"izmir"],
    [06,"ankara"],
    [01,"adana"]
]
const myMap = new Map(array2);
console.log(myMap)// Map(4) {34 => 'istanbul', 35 => 'izmir', 6 => 'ankara', 1 => 'adana'}

//map i array e cevirmek
const myArray = Array.from(myMap);
console.log(myArray) //[Array(2), Array(2), Array(2), Array(2)]---0 (2) [34, 'istanbul'],1 (2) [35, 'izmir'],..., 3(2) [1, 'adana']



// ! primitiv tipler ve refranis tipler in farki
const map3 = new Map();

map3.set(16,"bursa")
map3.set(07,"antalya")
map3.set(78,"kocaeli")
map3.set(24,"canakkale") //primitiv tip
map3.set([1,2,3],"Array") //refranis tip

console.log(map3.get([1,2,3])) // ! undefined ---cunku refranis tip oldugu icin