/*
static ---duran degismeyen anlaminda



*/

class Matematik{

    static topla(a,b){
        console.log(a+b)
    }

    cikar(a,b){
        console.log(a-b)
    }

    carp(a,b){
        console.log(a*b)
    }

    bol(a,b){
        console.log(a/b)
    }

}
// ! static olarak tanimlanmamissa Nesne uzerinden erisilir
// const matematik = new Matematik();
// matematik.topla(10,5)
// matematik.carp(5,7)

// ! static ise Class isimi uzerinden erisilir
Matematik.topla(10,7)


//----------------------------------------------------------------------
console.log("-------------------------------------------------------------")

//------------------------------------------------------------------------


class Insan{
    static languagesCount=10;

    constructor(firstName, lastName,salary){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.salary = salary;
    }
    writeInfo(){
        console.log(this.firstName,this.lastName,
            this.salary,this.languagesCount)
    }
}
const insan1 = new Insan("yasin","Sahyar",4500);
insan1.writeInfo(); //yasin Sahyar 4500 undefined----"undefined" sevebi "languagesCount" static oldugu icin 43.kurda



console.log(Insan.languagesCount); //10  ---static oldugu icin nesnenin disinda ayri cagirdik




