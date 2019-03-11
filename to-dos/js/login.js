var kullaniciadi = document.getElementById("k.adi");
var sifre = document.getElementById("inputPassword");
var giris = document.getElementById("giris");
var register = document.getElementById("register");
register.onclick=function(){
    window.location.pathname ="///C:/Users/kaand/Desktop/proje/javascript-example/to-dos/register.html";
}




var saveData = JSON.parse(localStorage.saveData || null) || {};
giris.onclick = function (giris) {
    if ((kullaniciadi.value == saveData.person.Name) && (sifre.value == saveData.person.Password)) {
       
        saveData.isLogin=true;
        saveData.time = new Date().getTime();
        localStorage.saveData = JSON.stringify(saveData);
    
        window.location.pathname ="///C:/Users/kaand/Desktop/proje/javascript-example/to-dos/index.html";

    } else {
        alert("yanlis");
    }
}


