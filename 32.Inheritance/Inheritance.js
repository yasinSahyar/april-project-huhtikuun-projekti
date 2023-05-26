// ! extends --inheritance (miras alma) metodu


class Insan {
     firstname = "yasin";

     write(){
        console.log(this.firstname);
     }
}
class Student extends Insan{ //inheritance metodu
    write(){
        console.log("Insan sinifindan geldi",this.firstname) // "Insan" ning icersindeki "firstname =yasin" ni miras aldi
    }
}
// const insan = new Insan();
// insan.write();

class Engeineer extends Insan{
     write(){
        console.log("5.satirdan geldi",this.firstname)
     }
}

class Farmer extends Insan{
    write(){
        console.log(this.firstname)
    }
}

const student1 = new Student();
student1.write(); //Insan sinifindan geldi yasin

const engeineer1 = new Engeineer();
engeineer1.write();//5.satirdan geldi yasin

const farmer1 = new Farmer();
farmer1.write(); //yasin