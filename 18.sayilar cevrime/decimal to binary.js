// decimal to binary conversion
/*
decimal ---1,2,3,5,10,87.....
binary---- 0101 1001 1010 10   makine dili

*/

convertDecimalToBinary(6);//110
convertDecimalToBinary(24);//11000
convertDecimalToBinary(28);//11100
convertDecimalToBinary(99);//1100011

function convertDecimalToBinary(number){
    let binary = "";
    while(true){
        binary+=(number%2).toString();
        number=Math.floor(number/2);//ondalik sayi ciksada "nokta"dan sonrakini birkmasi icin "Math.floor" yaptik
        if(number==1){
            //artik bolmek yok donguden cikacaz
            binary+=1;
            break;
        }
    }
    let result = reverse(binary);
    console.log("sonuc : " + result);
}


// tam tersine cevrimek
function reverse(binary){
    let reverseBinary = "";
    for(let i = binary.length-1; i>=0; i--){
        reverseBinary +=binary.charAt(i);
    }
    return reverseBinary;
}