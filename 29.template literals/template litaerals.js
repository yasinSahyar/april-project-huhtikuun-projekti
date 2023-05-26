//template litrals

//eski yontem
function write(firstName , lastName) {
    console.log("isim : " + firstName + " , " + "soyIsim :" + lastName) //isim : Yasin , soyIsim :Sahyar
}
write("Yasin","Sahyar") 


//template litrals kullanmak
function yazdir(firstName,lastName){
    console.log(`isim : ${firstName} soyIsim : ${lastName}`) //isim : yasinjan soyIsim : Sahyar
}
yazdir("yasinjan","Sahyar")




//gercek misallarda kullanimi

function getUserById(userId){
    console.log(`http://localhost:8080/users/${userId}`) 
}
getUserById(10) //http://localhost:8080/users/10
getUserById(8) //http://localhost:8080/users/8