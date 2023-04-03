// var -let - const

/*
scope (kapsamli)
global scope : --> sen buna her yerde erisebilirsin anlaminda
function scope : ---> ersebilirlik kapsami
block scope : ----> 
*/

// var degiskeninIsmi = 10;
// console.log(degiskeninIsmi);

//----------------------------------------------------------------------global scope
// var a = 5; // global scope --> sen buna her yerde erisebilirsin anlaminda

// if(true){
    

// }
// function method1(){
//     console.log(a);

// }
// method1();

//-------------------------------------------------------function scope
// function method1(){
//     var sayi = 10;

//     console.log(sayi); // bu yerde normal isleydu

// }
//  // console.log(sayi);  buyerde islimeydu hata berdu "{}" ning sirtiha qikip ketkenliktin
//  method1();

//-------------------------------------------------------------------block scope 

// function method1(){
//     var a = 5;  // function scope
//     if(true){  // burda "if" bir block scope bolidu

//         var a = 5;  // block scope

//     }
//     while(true){ // burda "while" bir block scope bolidu

//     }
//     for(let i=0; i<=10; i++){ // burda "for" bir block scope bolidu

//     }
//     do{                       // burda "do while" bir block scope bolidu

//     }while(true);
// }

//--------------------------var
// var : function scope --varla tanimladigimiz hersey function scope oluyor, block scope mu fanction scope ka ozgirdu
// var : her yerde erisebildigi icin rembelekte fazla yer kapliyor eski tarafi
// function selamver(){
//     var selam = "herkese selam"; // function scope
//     if(true){
//         var b = 10; // block scope mu fanction scope ka ozgirdu
//     }
//     console.log(b);
//     console.log(selam);


// }
// selamver();

//-----------------------------let & const
// let & const : block scope ozelligine sahip
function selamver(){
    var selam = "herkese selam"; // function scope
    if(true){
        const b = 10; // block scope mu fanction scope ka ozgirdu
        console.log(b);
    }
    // console.log(b);bu yerde {}ni askanliktin hata berdu
    console.log(selam);


}
selamver();

// Let & const arasindaki farik
// const(constant ): sabit degismez

const a = 10;
// a = 15 ; daha once a=10 oldugu icin hata veryor 
console.log(a);

let b = 5;
b = 12;
b = 7 ; // let oldugu icin hata vermez
console.log(b); 


const user = {
    username : "urumci",
    password : "12345"
}
console.log(user);


