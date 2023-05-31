class migrosBase{
    indirimOrani = 20;
    /*
    urunler[
        fiyat:10
        urunAdi: sut
    ]
    */

    constructor(isim, soyIsim,kartVarmi,urunler){
        this.isim = isim;
        this.soyIsim = soyIsim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    hesapla(){
        let odenecekTutar = 0;
        if(this.urunleriKontrolEt(this.urunler)){
            if(this.kartVarmi){
                //money karti vardir--indirimli fiyat hesapliyacak
                 //sepette urun var
                 
            this.urunler.forEach(urun => {
                odenecekTutar += (urun.fiyat*(100-this.indirimOrani)/100);
            });
            }else{
                //money karti yok , idrimsiz fiyat hesaplayacak
                 //sepette urun var
            this.urunler.forEach(urun => {
                odenecekTutar += urun.fiyat;
            });
            }
            

        }else{
            alert("En az bir tane urun satin almalisiniz !.")
        }
        return odenecekTutar;

    }

    urunleriKontrolEt(urunler){
        if(urunler!=null && urunler.length>0){
            return true; //urunler bos degilse veya...
        }
        return false;
    }

}