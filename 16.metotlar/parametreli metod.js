//parametreli metod 

function yazdir(isim,soyisim){
    console.log(isim + " " + soyisim);
}

yazdir("yasin","sahyar");
yazdir("ali","ozuygur");
yazdir("murat","haksever");
yazdir("yusup","kurum");
yazdir("imamhuhamet","ayyildiz");



//-------------------------------------------------------------

cube(5);//125  --- cagirdigmiz function alta olsada yukarda olsada farketmez calisir
cube(8);//512
cube(2);//8

function cube(sayi){
    console.log(sayi*sayi*sayi);
}


//---------------------------------------

let yas = Number(prompt("yasinizi giriniz"));
kontrolEt(yas);

function kontrolEt(yas){
    if(yas > 18){
        alert("ehliyet alabilirsiniz");
    }else{
        console.log("ehliyet alamazsiniz");
        alert("ehliyet alamazsiniz")
    }
}

