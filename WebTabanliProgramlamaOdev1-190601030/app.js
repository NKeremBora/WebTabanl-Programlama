
function Hesapla(){
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,      
        maximumFractionDigits: 2,
    });
    
    const number1 = parseInt(document.querySelector("#txtSayi1").value);
    const number2 = parseInt(document.querySelector("#txtSayi2").value);
    const number3 = document.querySelector("#txtSayi3").value;
    const number4 = document.querySelector("#txtSayi4").value;
    const number5 = document.querySelector("#txtSayi5").value;
    const number6 = document.querySelector("#txtSayi6").value;
    const number7 = document.querySelector("#txtSayi7").value;
    const number8 = document.querySelector("#txtSayi8").value;
    let toplam = 0,carpim=0,cikarma=0,bolme=0;

    toplam = number1 + number2;
    carpim = number3 * number4;
    cikarma = number5 - number6;
    bolme = formatter.format(number7 / number8);

    document.querySelector("#lblSonuc1").textContent = toplam;
    document.querySelector("#lblSonuc2").textContent = carpim;
    document.querySelector("#lblSonuc3").textContent = cikarma;
    document.querySelector("#lblSonuc4").textContent = bolme;
}


