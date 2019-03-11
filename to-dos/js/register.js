var kullaniciadi = document.getElementById("k.adi");
var sifre = document.getElementById("inputPassword");
var giris = document.getElementById("giris");
var replyPassword = document.getElementById("replyPassword");
var login =document.getElementById("login");
login.onclick = function(){
    window.location.href = "login.html";
}





var saveData = JSON.parse(localStorage.saveData || null) || {};
giris.onclick = function (giris) {

    if (kullaniciadi.value == "") {
        alert("Kullanıcı Adı Boş Geçilemez");
        return;
    }
    if (sifre.value != replyPassword.value) {
        alert("Şifreler Uyuşmuyor");
        return;
    }


   
        saveData.person = {Name:kullaniciadi.value,Password:sifre.value};
        saveData.time = new Date().getTime();
        localStorage.saveData = JSON.stringify(saveData);
    
        window.location.href = "login.html";

    
}
