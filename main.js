console.log("tarea 02");

//eventos al abrir la página
function hora() {
    var d = new Date();
    var month = new Array(12); month[0]='Enero';month[1]='Febrero';month[2]='Marzo';month[3]='Abril';month[4]='Mayo';month[5]='Junio';month[6]='Julio';month[7]='Agosto';month[8]='Septiembre';month[9]='Octubre';month[10]='Noviembre';month[11]='Diciembre';
    var todaysDate=+d.getDate()+' de '+month[d.getUTCMonth()]+' del '+d.getUTCFullYear();
    var lbl = document.getElementById('tweet');
    console.log(lbl);
    lbl.innerHTML += '<p>Fecha de hoy: ' + todaysDate + '</p>';
}
window.onload=function(){
    alert('Bienvenido a la mejor página sobre el Titanic');
}
hora();

//alerta al cerrar la página
window.onunload=function(){
    alert('Vuelve pronto :)');
}

//eventos al posicionar y retirar el mouse sobre <nav>
var lnk = document.getElementById("link");
lnk.addEventListener("mouseover",crecer);
lnk.addEventListener("mouseout",reducir);
console.log(lnk);

function crecer(){
    lnk.style.fontSize = '1.2em';
}

function reducir(){
    lnk.style.fontSize = '1em';
}

//evento al posicionar el mouse sobre el botón rojo
var btn = document.getElementsByClassName("red_button");
var div1 = document.getElementById("banner_image");
btn.item(0).addEventListener("mouseover",no);
console.log(btn);
console.log(div1);

function no(){
    div1.style.background = "url('images/Titanic1.jpg')";
    div1.style.backgroundSize = "cover";
    div1.style.backgroundPosition = "center";
}

//imprimir el sitio
document.querySelectorAll('.imprimir').forEach(function(element) {
    console.log(element);
    element.addEventListener('click', function() {
        print();
    });
});

//deshabilitar el uso del clic secundario
document.oncontextmenu = function(){
    return false;
}