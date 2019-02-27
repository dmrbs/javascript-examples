var ilksayi, ikincisayi, dogru = 0, yanlis = 0, sonuc, cevap, opt;

//HTML nesnelerinin oluşturulması
ilksayi = document.getElementById("ilksayi");
ikincisayi = document.getElementById("ikincisayi");
opt = document.getElementById("opt");
sonuc = document.getElementById("sonuc");
cevap = document.getElementById("cevap");
dogru = document.getElementById("dogru");
yanlis = document.getElementById("yanlis");

///rastgele sayı üretme fonksiyonu
//https://www.yazilimbilisim.net/javascript/javascript-rastgele-sayi-uretme/
Math.rastgele = function (alt, ust) {
    let sayi = Math.random();
    sayi = sayi * (ust - alt);
    sayi = Math.floor(sayi) + alt;

    return sayi;
}
//oyun başladığında yada soru tahmin edildiğinde yeni soru sormak için kullanılır.
function yeniSoru() {
    let islem = ["+", "-", "*", "/"];
    opt.textContent = islem[Math.rastgele(0, 4)]; //operatör seçimi

    var first= Math.rastgele(0, 100);
    var second=Math.rastgele(0, 100);
    
    if (opt.textContent == "/") {
         first =first*second;
    }
    ilksayi.value =first;
    ikincisayi.value = second;



}

//sayfa yüklendiğinde ilk kurulumun yapılması
window.onload = function () {

    yeniSoru();
   
}

//cevapla butonuna basıldığında değerlendirme işlemi
cevap.onclick = function () {
    let cevap, ils, iks;
    ils = Number(ilksayi.value);
    iks = Number(ikincisayi.value);
    switch (opt.textContent) {
        case '+': cevap = ils + iks; break;
        case "-": cevap = ils - iks; break;
        case "*": cevap = ils * iks; break;
        case "/": cevap = ils / iks; break;
        default: break;
    }

    if (sonuc.value == cevap) {
        dogru.textContent = Number(dogru.textContent) + 1;
    }
    else {
        yanlis.textContent = Number(yanlis.textContent) + 1;
    }

    yeniSoru();
}
