var btncalistir = document.getElementById("calistir");
var btnhizlan = document.getElementById("hizlan");

var btnyavasla = document.getElementById("yavasla");
var btnspeedtext = document.getElementById("speedtext");
var vitesgosterge = document.getElementById("vitesgosterge");


var araba = new Car();


btnyavasla.onclick = function () {
    araba.SlowDown();
    btnspeedtext.innerText = araba.Speed;
    vitesgosterge.innerHTML = araba.vites;
}

btnhizlan.onclick = function () {
    var gittimi = araba.MoveForward();
    if (gittimi) {

        btnspeedtext.innerText = araba.Speed;

        vitesgosterge.innerHTML = araba.vites;

    }

}


btncalistir.onclick = function () {
    araba.Run();

}


function Car() {
    this.Speed = 0;
    this.vites = 0;
    this.SlowDown = 0;
    this.VitesHızGücü = 50;
    this.isRunning = false;

    this.Run = function () {
        this.isRunning = true;
        vites++;
    }




    this.MoveForward = function () {
        if (!this.isRunning) {
            alert("Araba Çalışmıyor")
            return false;
        }



        if (this.Speed < 6 * this.VitesHızGücü) {
            this.Speed += 5;
            if (this.Speed > this.vites * this.VitesHızGücü) {
                this.vites++;

            }
        }
        return true;

    }
    this.SlowDown = function () {
        if (!(this.Speed == 0)) {
            this.Speed -= 5;
            if (this.Speed % this.VitesHızGücü == 0) {
                this.vites--;

            }

        }
    }


}