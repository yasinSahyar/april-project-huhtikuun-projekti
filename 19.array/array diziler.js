// array --diziler 

let numra = [1,2,3,4,5,6,7,8,9,0,"yasin","enses","alim",15,16];

numra[14]="mehmet"; //--14. index te 16 ning yirini "mehmet" te degistirdik 

console.log(numra[6]);//7
console.log(numra[10]);//yasin
console.log(numra[9]);//0
alert(numra[5]);//6
alert(numra[12]);//alim

console.log(numra[14]);//mehmet   


//-----------------------------------------

let isimler = ["yasin","kamal","memet","ehmet","isa","tunyaz"];
isimler[2]="emitahun";//2.index teki "memet" nin  yerine"emitahun"ni degistirdik
console.log(isimler);

//------------------------------------------

let karsikDizi = [1,"yasin",5.9,true,null,undefined];
console.log(karsikDizi);