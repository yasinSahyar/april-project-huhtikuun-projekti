// ! spread oprator  "..."   dilimlemek

let numbers = [10,20,30,40];
function add(a,b,c,d){
    console.log(a+b+c+d)
}
//eski yontem
// add(numbers[0],numbers[1],numbers[2],numbers[3]);

//yeni yontem
add(...numbers);//100 --spread oprator




//
const diller1=["java","c#"]
//const diller2=["php","python",diller1[0],diller1[1]] ;//eski yontem

const diller2=["php","python",...diller1] //diller1 de  kac tane deger varsa hepsini buraya getiryor

console.log(diller2);// ['php', 'python', 'java', 'c#']



//
const numralar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let [a,b,c,...kalanSayilar] =numralar

console.log(a,b,c,kalanSayilar);//1 2 3 (17) [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]



//
const array1 = ["yasin","kamal","isa","emer","tunyaz"]

// let array2 = [] //eski yontem
// array2[0] = array1[0]
// array2[1] = array1[1]
// array2[2] = array1[2]
// array2[3] = array1[3]

const array2 = [...array1] //yeni yontem

console.log(array2)  //['yasin', 'kamal', 'isa', 'emer']