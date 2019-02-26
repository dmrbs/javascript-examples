var optDurum = false, opt = "", sonuc = 0;
var btnRakam = document.querySelectorAll(".btnRakam");
var result = document.querySelector("#result");
var btnOpt = document.querySelectorAll(".btnOpt");
var islem = document.querySelector("#islem");

btnRakam.forEach(function (element) {
    element.onclick = function (e) {

        if(result.textContent=="0")
        result.value += this.textContent;
    }
});

for (var i = 0; i < btnOpt.length; i++) {
    var element = btnOpt[i];
    element.onclick = function (e) {
        var yeniOpt = this.textContent;
        islem.textContent = islem.textContent +" "+result.textContent+" "+yeniOpt;


        switch (opt) {
            case "+": result.textContent = (sonuc + Number(result.textContent)); break;
            case "-": result.textContent = (sonuc - Number(result.textContent)); break;
            case "*": result.textContent = (sonuc * Number(result.textContent)); break;
            case "/": result.textContent = (sonuc / Number(result.textContent)); break;
            default: break;
        }
        sonuc = Number(result.textContent);
        opt = yeniopt;



        //switch-case ile bağdaş özelliklere sahip \/ 
        // if (opt == "+") {
        //     alert("TOplamak")
        // } else if (opt == "-") {
        //     alert("Çıkarmak");
        // } else if (opt == "*") {
        //     alert("Ça");
        // } else if (opt == "/") {
        //     alert("Bö");
        // }else{

        //     alert("Bulunamadu")
        // }


    }
}






