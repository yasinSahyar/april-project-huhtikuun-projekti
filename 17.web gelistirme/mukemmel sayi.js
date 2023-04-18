//mukemmel sayi uygulamasi

/*
6  -  28   - 496

bolen sayilarin toplami originalinin 2 katina esitse buna mukemmel sayi denir
6  = 1,2,3,6 = 12 = 6*2
28  = 1,2,4,7,14,28 = 56 = 28*2 
496 = 

*/
mukemmelSayi(6);//mukemmel sayidir
mukemmelSayi(8);//mukemmel sayi degildir
mukemmelSayi(496);//mukemmel sayidir

function mukemmelSayi(sayi){
    let toplam = 0;
    for(let i=2; i<=sayi/2; i++){
        if(sayi%i==0){
            toplam+=i;
        }
    }
    toplam+= 1 + sayi;//1 ve kendisinede bolundugu icin
    if(toplam==sayi*2){
        console.log("mukemmel sayidir...");
    }else{
        console.log("mukemmel sayi degildir...");
    }
} 