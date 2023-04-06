/*
1x1=1
1x2=2
1x3=3
....
....
...

*/

for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        console.log(i+"X"+j+"="+(i*j));
    }
    console.log("-----------------------------------------------------------------------")
}



//!---------------------------------asal sayi bulma (asal sayi---1 ve kendisinden baska sayiya bolunmeyen sayidir)

/*
2	3	5	7	11	13	17	19	23	29	31.....


*/
//
let sayi =Number(prompt("lutfen bir sayi giriniz :"));
let sonuc =true;
for(let i=2;i<=Math.floor(sayi/2);i++){
    if(sayi%i==0){
        //asal degildir
        sonuc=false;
        break;
    }
}
if(sonuc){
    alert(sayi + " asaldir.");
}else{
    alert(sayi + " asal degildir!");
}
