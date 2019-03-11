


//#region sayfa ilk yüklendiğinde çalışcak kodlar

// kullanıcın değer girmesini sağlayan html elementini değikene atadık
var textBox = document.getElementById("texting");
// Yapılacaklar listesini gösterilmesini sağlayan html etkiketini değişkene atadık

var todosPanel = document.getElementById("todos_panel");
//yapılacaklar listesini hafızada tutmak için dizi oluşturduk.
var todos = new Array();
//yapılacaklar listesindeki elemanların benzersiz olmasını sağlayan sayaç-
//her yeni bir yapılacak iş oluşturulduğunda otomatik artar.
var counter = 0;
var btnExit = document.getElementById("btnExit");
btnExit.onclick=function(){
    saveData.isLogin=false;
    saveData.time = new Date().getTime();
    localStorage.saveData = JSON.stringify(saveData);

    window.location.href ="login.html";

}



var btnClear = document.getElementById("btnClear");
btnClear.onclick = function () {
    Swal.fire({
        title: 'Silmek istiyor musunuz?',
        text: "Bu değişiklikleri geri alamazsınız.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            saveStuff("");

        
                location.reload();


        }

    })

}

// hafızaya kaydedilen verileri değişkene atadı.
var saveData = JSON.parse(localStorage.saveData || null) || {};

debugger
if(saveData.isLogin!=true){
    window.location.href = "login.html";
}



if (saveData.time) {
    //kaydedilen verilerin içerisindeki obje(todos olarak kaydetmiştik) sayısı kadar döngü
    for (let i = 0; i < saveData.obj.length; i++) {
        //objenin tek tek elemanları değiskene atadık
        var item = saveData.obj[i];

        //Kaydilen todoları ekrana getirmek için todo objesini oluşturup KendiniOlustur methodu çağrıldı
        var todo = new TODO(item.Id, item.Content, item.Completed, item.Back);
        todo.KendiniOlustur();

        //kaydedilen datalar şuanki todos(array) listesine eklendi
        todos.push(todo);

    }


    if (todos.length > 0) {
        var maxValue = 0;
        var currentnumber = 0;
        for (let i = 0; i < todos.length; i++) {//sadece döngü sayılar kaç tane ise o kadar döner ve her seferinde i yi artırır . i sayısını da sayilar(arrau)'ın bir sonraki elemanı için kullanıbilir 
            currentNumber = todos[i].Id;
            if (currentNumber > maxValue) {
                maxValue = currentNumber;
            }

        }
        counter = maxValue;
    }

}
//#endregion

//kullanıcının değer girmesini sağlayan etiketinin tuşa anlık basılma durumunu yakalıyor.
textBox.onkeypress = function (event) {
    //13 no'lu keykode 'ENTER'a eşittir.
    if (event.keyCode == 13) {//Eğer entera basıldıysa alt taraftaki kodu çalıştır


        //bu kontrol textBox'ın boş olarak basılmamasını 'ENTER'a basınca uyarı veren kod. 
        if (textBox.value.length > 0) {
            //Id'sinin benzersiz olmasını sağlayan sayaç birer birer artıyor.
            counter++;
            //yeni bir yapılacak objesi oluşturup değişkene atadık.
            var todo = new TODO(counter, textBox.value, false, "pink");//TODO'nun benzersiz Id'si,o anki textBox değeri ,tamamlandı mı durumu ve arkaplan rengi parametre olarak gönderildi

            //todo'nun kendini oluşturup,todos panelinin içerisine ekliyor.
            todo.KendiniOlustur();

            //oluşturulan todo,todos dizisine ekleniyor
            todos.push(todo);
            //todos'un o an ki durumu kaydedediliyor . (localstorage.saveData özelliği içerisine kaydedilir.) Sayfa yenilendiğinde verilerin kaybolmasını engelller
            saveStuff(todos);

            Swal.fire({
                title: 'Başarılı!',
                text: 'Yeni Göreviniz Başarıyla Eklendi',
                type: 'success',
                confirmButtonText: 'Kapat',
                animation: false,
                customClass: 'animated tada'
            })
        } else {
            //hiç bir değer girilmediğinde ,kullancıya alan boş geçilemez uyarısını belirtir.
            alert("Alan boş geçilemez.");

        }


    }

    //textBox'ın karakter sayısı 28'i geçmesi halinde kullanıcıya uyarı verir.

}


// yapılacak objesi oluşturuldu.Kod tekrarlanmasını engellemek için tek bir obje içerisinde yazıp her istediğimiz yerde kullanmak için kolaylık sağladı.
function TODO(Id, content, completed, back) {//Özel belirlenilen Id,todo'nun içeriği,yapılacakları kontrol(bitip,bitmemesi) amaçlı eklendi,arka plan rengi.

    // objenin özelliklerine parametre ile gelen değerler atanıyor
    this.Id = Id;
    this.Completed = completed;
    this.Content = content;
    this.Back = back;


    //objenin methodu oluşturuldu,todo elemanını oluşturup,yapılacak listesine ekler.
    this.KendiniOlustur = function () {
        //div oluşturuldu,class oalrak row ve todo-item eklendi,style olarak background-color parametreden gelen değerle birliklte eklendi...
        var todo_item = document.createElement("div");
        todo_item.classList.add("row");
        todo_item.classList.add("todo-item");
        todo_item.style = "background-color:" + this.Back;


        // row kısmını sağ ve sol (col-11 ve col-1)şeklinde ayrıldı.
        var contentArea = document.createElement("div");
        contentArea.classList.add("col-11");
        contentArea.classList.add("content-area");
        var contentTickcol = document.createElement("div");
        contentTickcol.className = "col-1";


        //sol tarafın içerisine todonun parametre ile gelen değeri "span" etiketi içerisinde eklendi.
        var contentSpan = document.createElement("span");
        contentSpan.innerHTML = this.Content;

        contentArea.appendChild(contentSpan);


        var todoRemove = document.createElement("i");
        todoRemove.className = "fas fa-times";


        var attr = document.createAttribute("ali");
        attr.value = this.Id;
        todoRemove.setAttributeNode(attr);

        todoRemove.onclick = function () {

            for (let i = 0; i < todos.length; i++) {
                var item = todos[i];
                if (item.Id == todoRemove.getAttribute("ali")) {

                    var pos = todo_item.clientWidth;
                    var heigth = todo_item.clientHeight;
                    var id = setInterval(frame, 1);
                    function frame() {
                        if (pos == 0) {
                            clearInterval(id);

                            todosPanel.removeChild(todo_item);
                            todos.splice(todos.indexOf(item), 1);

                            saveStuff(todos);
                        } else {
                            pos -= 4;


                            todo_item.style = 'width:' + pos + 'px; height:' + heigth + 'px';
                        }
                    }





                    break;
                }
            }

        }

        //#region Content Tick Bölümü
        //sağ tarafın içerisine "x" işareti eklendi
        var contentTick = document.createElement("i");
        contentTick.className = "fa fa-check";

        //tick işaretini html etiketi içerisine "data-id" attribute eklendi. "data-id" içerisine ise todonun idsi yerleştirildi
        var attr = document.createAttribute("data-id");
        attr.value = this.Id;
        contentTick.setAttributeNode(attr);

        //yapılacak işin 'x' işaretine tıklanmasına method çalıştırma eklendi...
        contentTick.onclick = function () {
            //bu kodla 'x'e basıldığında mevcut satır siliniyor.
            //todosPanel.removeChild(todo_item);

            //todo_item'in backgorund'u gri olarak değiştirildi.
            todo_item.style = "background-color:lightgreen";
            //mevcut todo'ların içerisinde şu an tıkladığımız 'x' işaretinin Id'si ile eşit olan todo var mı kontrolü 
            for (let i = 0; i < todos.length; i++) {//todoların sayısı kadar döngü belirlendi
                //todos elemanaları tek tek bir değişkene atandı.
                var item = todos[i];
                //tick'in içerisine kaydedilen Id'nin todoların içerisindeki itemleri Id'sine eşit olma durumu kontorl edildi.
                if (contentTick.getAttribute("data-id") == item.Id) {
                    //eğer eşit ise itemin tamamlandı ve back özellikleri değiştirildi..
                    item.Back = "lightgreen";
                    item.Completed = true;
                    // o anki todoların durumları kaydedildi.
                    contentTickcol.appendChild(todoRemove);
                    saveStuff(todos);
                    break;
                }
            }
            //contentick tıklandığında contentick'i silinmesi sağlandı.
            contentTickcol.removeChild(contentTick);
        }
        //#endregion

        //eğer todo yapılmamışsa tik işaretini ekle.
        if (!this.Completed) {
            contentTickcol.appendChild(contentTick);
        } else {
            contentTickcol.appendChild(todoRemove);
        }


        //todo_item'in içerisine sağ ve sol kısıım eklendi.
        todo_item.appendChild(contentArea);
        todo_item.appendChild(contentTickcol);


        //todo_item todolarının listlendiği(todosPanel) elementin içerisine eklendi.
        todosPanel.appendChild(todo_item);


    };

}

// hafızaya kaydetme methodu
function saveStuff(obj) {//obje olarak todos listesini(arrayleri) kaydediyoruz.
    saveData.obj = obj;
    saveData.time = new Date().getTime();
    localStorage.saveData = JSON.stringify(saveData);
}