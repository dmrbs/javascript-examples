/*
var namepanel= document.getElementById("namepanel");
var surnamepanel= document.getElementById("surnamePanel");

var baslangic = 1;
for (baslangic; baslangic <= 40; baslangic++) {
    if (baslangic % 2 == 0) {
        namepanel.innerHTML += '<div class="row"> <div class="col-12 backcol2"> <p>kaan</p> </div> </div>'; 
    }else{
        namepanel.innerHTML += '<div class="row"> <div class="col-12 backcol"> <p>kaan</p> </div>  </div>';  
    }
}

for (var baslangic=1; baslangic <= 20; baslangic++) {
    if (baslangic % 2 == 0) {
        surnamepanel.innerHTML += '<div class="row"> <div class="col-12 backcol"> <p>Dmrbs</p> </div> </div>'; 
    }else{
        surnamepanel.innerHTML += '<div class="row"> <div class="col-12 backcol2"> <p>Dmrbs</p> </div>  </div>';  
    }
}
*/

var ciftsayilar = document.getElementById("ciftsayilar");
var teksayilar = document.getElementById("teksayilar");
var tamsayilar = document.getElementById("tamsayilar");
var asalsayilar = document.getElementById("asalsayilar");


for (var baslangic = 0; baslangic <= 500; baslangic++) {
    if (baslangic % 2 == 0) {
        ciftsayilar.innerHTML += '<div class="row"> <div class="col-12 ciftcolor" >' + baslangic + '</div>';
    } else {
        teksayilar.innerHTML += '<div class="row"> <div class="col-12 tekcolor" >' + baslangic + '</div>';
    }
}

for (var baslangic = 0; baslangic <= 250; baslangic++) {
    tamsayilar.innerHTML += '<div class="row"> <div class="col-12 tamcolor" >' + baslangic + '</div>';
}

var asallar = new Array();
for (var baslangic = 2; baslangic <= 1000; baslangic++) {
    debugger;
    var asalsayimi = true;

    if ((baslangic!=2 && baslangic % 2 == 0) ||(baslangic!=3 && baslangic % 3 == 0) ||(baslangic!=5 && baslangic % 5 == 0)|| (baslangic!=7 && baslangic % 7 == 0) ) {
        asalsayimi = false;
    }

      

    for(var i=0;i<asallar.length;i++){
        if(baslangic%asallar[i]==0){
            asalsayimi=false;
        }
    }

    if (asalsayimi) {
        asallar.push(baslangic);
        asalsayilar.innerHTML += '<div class="row"> <div class="col-12 asalcolor" >' + baslangic + '</div>';
    }








}


