var eDivOyunPanel = document.getElementById("oyun-panel");
var oyunbasladımı = false;
var record = 0;
var oldrecord = 0;
var oyun = '<div class="row"> <div class="col-12"> <div class="row"> <div class="col-12 "> <input class="form-control game-input" type="text" id="tahmin" placeholder="Sayı Giriniz"> </div> </div> <div class="row"> <div class="col-12"> <button type="button" id="kontrol" class="btn btn-danger btn-block equal">Sonuç</button> </div> </div> <div class="row"> <div class="col-12 "> <div class=" game-text-panel"> <p id="sonuc">-</p> </div> </div> </div> </div> </div> </div>';

oyunbaslangicAc();



function oyunbaslangicAc() {

    var oyunbaslangıc = '<div class="row"> <div class="col-12"> <div class="row"> ';

    var recordPanel = '<div class="col-12"> <div class="game-text-panel"> <p>En yüksek Skor :<span id="game-record">0</span></p> </div> </div>';
    if (oyunbasladımı) {
        oyunbaslangıc += recordPanel;
        oyunbaslangıc += ' <div class="col-12"> <button type="button" id="play" class="btn btn-info btn-block equal">Yeniden Oyna';
    } else {
        oyunbaslangıc += ' <div class="col-12"> <button type="button" id="play" class="btn btn-info btn-block equal">Oyna';
    }

    oyunbaslangıc += '</button> </div> </div> </div> </div>';

    eDivOyunPanel.innerHTML = oyunbaslangıc;

    if (oyunbasladımı) {
        var etxtRecord = document.getElementById("game-record");

        etxtRecord.innerHTML = oldrecord;

    }

    var ebtnGameStart = document.getElementById("play");
    ebtnGameStart.onclick = function () {
        oyunubaslat();

    }
}


function oyunubaslat() {
    eDivOyunPanel.innerHTML = oyun;
    var etextSonuc = document.getElementById("sonuc");
    var etextBoxtTahmin = document.getElementById("tahmin");
    var ebtnKontrol = document.getElementById("kontrol");
     var random = Math.floor(Math.random() * 100);
   // var random = 100;



    ebtnKontrol.onclick = function () {

        var tahmin = etextBoxtTahmin.value;

        if (tahmin == random) {
            etextSonuc.innerHTML = "Tebrikler"

            etextSonuc = setTimeout(
                function () {
                    
                    alert("Hamle Skoru Hesaplanıyor");
                    if (oyunbasladımı) {
                        debugger;
                        if (record < oldrecord) {
                            oldrecord = record;
                        }
                    } else {
                        oldrecord = record;
                    }
                    record=0;
                    oyunbasladımı = true;
                    oyunbaslangicAc();
                   



                }, 3000);
          





        } else {
            if (random + 5 > tahmin && random - 5 < tahmin) {
                etextSonuc.innerHTML = "Yanıyorum"

            } else if (random + 10 > tahmin && random - 10 < tahmin) {
                etextSonuc.innerHTML = "çok sıcak"

            }
            else if (random + 15 > tahmin && random - 15 < tahmin) {
                etextSonuc.innerHTML = "Sıcak"

            }
            else if (random + 20 > tahmin && random - 20 < tahmin) {
                etextSonuc.innerHTML = "soguk"

            }
            else if (random + 30 > tahmin && random - 30 < tahmin) {
                etextSonuc.innerHTML = "çok soğuk"

            } else if (random + 40 > tahmin && random - 40 < tahmin) {
                etextSonuc.innerHTML = "dondum"

            } else {
                etextSonuc.innerHTML = "ooooooooo"
            }



        }


        record++;




    }


}











