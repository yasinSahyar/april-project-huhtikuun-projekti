
let mesaj =
`
migrosa hos geldiniz.
money kartiniz var mi ?
1- Evet
2-Hayir

`;

const urunler = [
    {
        urunIsmi : "sut",
        fiyat : 15
    },
    {
        urunIsmi : "bebek bezi",
        fiyat : 100
    },
    {
        urunIsmi : "kuzu eti",
        fiyat : 220
    },
    {
        urunIsmi : "yogurt",
        fiyat : 35
    }
]
//true---evet var anlaminda
//false-- hayir yok 
let sonuc = confirm(mesaj);
let odenecekTutar;

if(sonuc){
   //money karti vardir
   let isim = prompt("adinizi giriniz :");
   let soyIsim = prompt("soyIsminizi giriniz :");

   const customer1 = new customer(isim,soyIsim,sonuc,urunler);
   
   odenecekTutar = customer1.hesapla();
   alert(
    `
    musteri bilgileri : ${isim} ${soyIsim} 
    odenecek tutar : ${odenecekTutar}
    `
   );

}else{
   // moey karti yok
   const customer1 = new customer(null,null,sonuc,urunler);
   odenecekTutar = customer1.hesapla();
   alert(`odenecek tutar : ${odenecekTutar}`);
}