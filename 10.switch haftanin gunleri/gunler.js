
/* 1.misal----------- 
let sayi = prompt("lutfen 1 ile 5 arasinda bir sayi giriniz");

switch (sayi) // "1","2","3","4","5" , string oldugu icin
{
    case "1":
        //kodlariniz
        console.log("giren sayi 1'dir ");
        break;

    case "2":
        console.log("giren sayi 2'dir ");
        break;

    case "3":
        console.log("giren sayi 3'dir ");
        break;

    case "4":
        console.log("giren sayi 4'dir ");
        break;

    case "5":
        console.log("giren sayi 5'dir ");
        break;

    default:
        console.log("girlen sayi 1 ile 5 arasinda olmalidir !");
        break;


}
*/

//-----2. misal------
let yeniSatir = "\r\n";
let metin = "1-pazartesi" + yeniSatir
+"2-sali"+ yeniSatir
+"3-carsamba"+ yeniSatir
+"4-persembe"+ yeniSatir
+"5-cuma"+ yeniSatir
+"6-cumartesi"+ yeniSatir
+"7-pazar"+ yeniSatir
+yeniSatir
+"Lutfen gun seciniz."


let deger = prompt(metin);
switch(deger){
    case"1":
    console.log("pazartesi gunu");
    break;

    case"2":
    console.log("sali gunu");
    break;

    case"3":
    console.log("carsamba gunu");
    break;

    case"4":
    console.log("persembe gunu");
    break;

    case"5":
    console.log("cuma gunu");
    break;

    case"6":
    console.log("cumartasi gunu");
    break;

    case"7":
    console.log("pazar gunu");
    break;

    default:
        console.log("Lutfen gecerli bir deger giriniz !");
}


