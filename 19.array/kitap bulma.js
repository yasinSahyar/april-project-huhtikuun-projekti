

let kitap1={isim : "bore ana", yazar : "tursun kadir", fiyat : 25, raf :"1.5.RAF"}
let kitap2={isim : "yarkent doliti", yazar : "abdushukur muhemet emin" , fiyat : 50 , raf :"2.6.RAF"}
let kitap3={isim : "medenyetler tukunsi", yazar : "hantintong", fiyat : 35 , raf :"3.2.RAF"}
let kitap4={isim : "iz", yazar :"abdurehim otkur",fiyat : 45 , raf :"4.9.RAF"}
let kitap5={isim : "yultuzluk tunler" , yazar : "cingiz aytimatof", fiyat :25 , raf :"5.8.RAF"}
let kitap6={isim : "ana yurt", yazar : "zordun sabir", fiyat : 36 , raf :"1.5.RAF"}
let kitap7={isim : "oyhangan zimin", yazar : "abdurehim otkur", fiyat : 38, raf :"2.3.RAF"}
let kitap8={isim : "uyghurlar" , yazar : "abdushukur muhamet emin", fiyat : 40, raf :"3.9.RAF"}
let kitap9={isim : "yirak kirlardin anayerge salam", yazar : "ehtem omer", fiyat : 34 , raf :"4.1.RAF"}
let kitap10={isim : "sarang" , yazar : "memtimin hushur", fiyat : 43 , raf :"5.6.RAF"}

let kitaplar =[kitap1,kitap2,kitap3,kitap4,kitap5,kitap6,kitap7,kitap8,kitap9,kitap10];

let raf11={kod :"1.1.RAF", goster :false}
let raf12={kod :"1.2.RAF", goster :false}
let raf13={kod :"1.3.RAF", goster :false}
let raf14={kod :"1.4.RAF", goster :false}
let raf15={kod :"1.5.RAF", goster :false}
let raf16={kod :"1.6.RAF", goster :false}
let raf17={kod :"1.7.RAF", goster :false}
let raf18={kod :"1.8.RAF", goster :false}
let raf19={kod :"1.9.RAF", goster :false}
let raf10={kod :"1.10.RAF", goster :false}

let raf21={kod :"2.1.RAF", goster :false}
let raf22={kod :"2.2.RAF", goster :false}
let raf23={kod :"2.3.RAF", goster :false}
let raf24={kod :"2.4.RAF", goster :false}
let raf25={kod :"2.5.RAF", goster :false}
let raf26={kod :"2.6.RAF", goster :false}
let raf27={kod :"2.7.RAF", goster :false}
let raf28={kod :"2.8.RAF", goster :false}
let raf29={kod :"2.9.RAF", goster :false}
let raf20={kod :"2.10.RAF", goster :false}

let raf31={kod :"3.1.RAF", goster :false}
let raf32={kod :"3.2.RAF", goster :false}
let raf33={kod :"3.3.RAF", goster :false}
let raf34={kod :"3.4.RAF", goster :false}
let raf35={kod :"3.5.RAF", goster :false}
let raf36={kod :"3.6.RAF", goster :false}
let raf37={kod :"3.7.RAF", goster :false}
let raf38={kod :"3.8.RAF", goster :false}
let raf39={kod :"3.9.RAF", goster :false}
let raf30={kod :"3.10.RAF", goster :false}

let raf41={kod :"4.1.RAF", goster :false}
let raf42={kod :"4.2.RAF", goster :false}
let raf43={kod :"4.3.RAF", goster :false}
let raf44={kod :"4.4.RAF", goster :false}
let raf45={kod :"4.5.RAF", goster :false}
let raf46={kod :"4.6.RAF", goster :false}
let raf47={kod :"4.7.RAF", goster :false}
let raf48={kod :"4.8.RAF", goster :false}
let raf49={kod :"4.9.RAF", goster :false}
let raf40={kod :"4.10.RAF", goster :false}

let raf51={kod :"5.1.RAF", goster :false}
let raf52={kod :"5.2.RAF", goster :false}
let raf53={kod :"5.3.RAF", goster :false}
let raf54={kod :"5.4.RAF", goster :false}
let raf55={kod :"5.5.RAF", goster :false}
let raf56={kod :"5.6.RAF", goster :false}
let raf57={kod :"5.7.RAF", goster :false}
let raf58={kod :"5.8.RAF", goster :false}
let raf59={kod :"5.9.RAF", goster :false}
let raf50={kod :"5.10.RAF", goster :false}

let raflar = [
    [raf59,raf58,raf57,raf56,raf55,raf54,raf53,raf52,raf51,raf50],
    [raf49,raf48,raf47,raf46,raf45,raf44,raf43,raf42,raf41,raf40],
    [raf39,raf38,raf37,raf36,raf35,raf34,raf33,raf32,raf31,raf30],
    [raf29,raf28,raf27,raf26,raf25,raf24,raf23,raf22,raf21,raf20],
    [raf19,raf18,raf17,raf16,raf15,raf14,raf13,raf12,raf11,raf10]
]

function rafOlustur(){
    console.clear();
    let satir = "";
    for(let i =0; i<raflar.length ; i++){
        for(let j=0; j<10 ; j++){
            satir+= "|"+ (raflar[i][j].goster ? raflar[i][j].kod : "---") + ""; //!true bolsa-- "raflar[i][j].goster ? " , false bolsa--"raflar[i][j].kod :" calisir
        }
        console.log(satir);
        console.log("---------------------------------------")
        satir= "";
        
    }
}

function kodBul(kitapIsmi){
    let rafKod = null;
    kitaplar.forEach(function(kitap){
        if(kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(),0)){
            // console.log(kitap.isim);
            rafKod = kitap.raf;
        }
    });
    return rafKod;
}

function raftaGoster(rafKodu){
    for(let i=0; i<raflar.length; i++){
        for(let j=0; j<10; j++){
            if(raflar[i][j].kod==rafKodu){
                raflar[i][j].goster=true;
                break;
            }
        }
    }
}

rafOlustur();

let kitapIsmi = prompt("lutfen bir kitap ismi giriniz." );
let rafKod = kodBul(kitapIsmi);


if(rafKod !=null){
    raftaGoster(rafKod);
    rafOlustur();

}else{
    alert("Girdigniz kitap kutuphanemizde bulunmamaktadir !");
}