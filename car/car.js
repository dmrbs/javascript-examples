var btncalistir = document.getElementById("calistir");
var btnhizlan = document.getElementById("hizlan");
var btnvites = document.getElementById("vites");
var btnyavasla = document.getElementById("yavasla");
var btnspeedtext = document.getElementById("speedtext");
var vitesgosterge = document.getElementById("vitesgosterge");

var vitesdurumu = 0;



var arabacalisiyormu = false;



btnyavasla.onclick = function () {
    if (!(Number(btnspeedtext.innerHTML) <= 0)) {

        btnspeedtext.innerHTML = Number(btnspeedtext.innerHTML) - 5;
        if (((vitesdurumu - 1) * 25) > Number(btnspeedtext.innerHTML)) {
            vitesdurumu--;
            vitesgosterge.innerHTML = vitesdurumu;
        }
    } else {
        vitesdurumu = 0;
        vitesgosterge.innerHTML = 0;
    }

}






btnvites.onclick = function () {
    if (arabacalisiyormu == false) {
        alert("arabayı çalıştırın");
        return;
    }

    if (vitesdurumu < 6) {
        vitesdurumu++;
        vitesgosterge.innerHTML = vitesdurumu;
    }

}


btnhizlan.onclick = function () {
    if (arabacalisiyormu) {
        if (Number(btnspeedtext.innerHTML) < vitesdurumu * 25) {
            btnspeedtext.innerHTML = Number(btnspeedtext.innerHTML) + 5;
        } else if (vitesdurumu == 0) {
            alert("Araba Boşta")
        }
    } else {
        alert("araba çalışmıyor.")
    }
}



btncalistir.onclick = function () {
    arabacalisiyormu = true;

}


