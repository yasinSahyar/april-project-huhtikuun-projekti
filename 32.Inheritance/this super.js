/*
this ----bu sinifi yani  miras aldigmiz sinifi gosteryor
super----ust sinifi goster
super()---- ust sinifin kompile constructor i ni alyor


*/

class Person {

    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo(){
        console.log(this.firstName, this.lastName, this.salary);
    }
}

class Student extends Person{

    constructor(firstName,lastName,salary){
        super(firstName,lastName,salary)
    }
    writeInfo(){
        super.writeInfo();
    }
}

class Engineer extends Person{

    constructor(firstName,lastName,salary){
        super(firstName,lastName,salary)
    }
    writeInfo(){
        super.writeInfo();
    }
}


const student1 = new Student("yasin","Sahyar",3500);
const engineer1 = new Engineer("kamal","Bilal",3200);

student1.writeInfo(); //yasin Sahyar 3500
engineer1.writeInfo(); // kamal Bilal 3200



