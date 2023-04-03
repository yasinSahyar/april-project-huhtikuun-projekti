
/*
-----deris ortalamasi bulma----
vize1 30% , vize2 30% , final 40%
*/
let vize1 = Number(prompt("vize 1 notunuzu giriniz : "));
let vize2 = Number(prompt("vize 2 notunuzu giriniz : "));
let final = Number(prompt("final notunuzu giriniz : "));

let ortalama = (vize1*0.3) + (vize2*0.3) + (final*0.4);

if(ortalama>=60){
    alert("deristen gectiniz tebrikler !:");
    console.log("deristen gectiniz tebrikler !:");//console dede gormek icin yazdik
}else{
    alert("kaldiniz, gecmis olsun !..:");
    console.log("kaldiniz, gecmis olsun !.. :");
}

/*
------ Else if yapisi ------

1. yol   2. yol   3. yol


*/
let secilenYol = prompt("lutfen gitmek istediginiz yolu seciniz :");
if(secilenYol ==1){
    alert("secilen yol " + secilenYol + " . yoldur");
}else if(secilenYol ==2){
    alert("secilen yol " + secilenYol + " . yoldur");
}else if(secilenYol ==3){
    alert("secilen yol " + secilenYol + " . yoldur");
}
else{
    alert("lutfen gecerli bir yol seciniz !!");
}
