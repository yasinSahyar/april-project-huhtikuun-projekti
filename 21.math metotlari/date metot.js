// Date (tarih) kullanimi

let tarih = new Date();
console.log(tarih);//Mon Apr 24 2023 11:08:27 GMT+0300 (Eastern European Summer Time)  ---suanki tarihi veryor

console.log(tarih.getFullYear());//2023 ,yili al
console.log(tarih.getHours());//11 ,saati al
console.log(tarih.getUTCSeconds());//8,second al
console.log(tarih.toLocaleDateString());//  4/24/2023
console.log(tarih.toLocaleTimeString());// 11:20:56 AM

//set  --yeni bir tarih vermek
console.log(tarih); //Mon Apr 24 2023 11:25:45 --bugun
tarih.setDate(25); //gunu 25 e aldik
console.log(tarih); //Tue Apr 25 2023 11:25:45

tarih.setHours(15); // saati 15 e aldik
console.log(tarih); //Tue Apr 25 2023 15:28:12



let saatler = new Date();
console.log(saatler);//helsinki,istanbul suanki saati  ---      Mon Apr 24 2023 11:36:05 赫尔辛基时间

saatler.setHours(saatler.getHours()+5);
console.log(saatler); // beijing suanki saati             ------Mon Apr 24 2023 16:36:05  北京时间

saatler.setHours(saatler.getHours()-12);
console.log(saatler);//new york suanki saati                     ------Mon Apr 24 2023 04:42:51   纽约时间

saatler.setHours(saatler.getHours()+5);
console.log(saatler);//london suanki saati                      ------ Mon Apr 24 2023 09:45:27    伦敦时间


