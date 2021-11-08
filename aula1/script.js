var data = new Date();
var hora = data.getHours();
var title = document.getElementById("title");
var text = document.getElementById("text");
var turno = document.getElementById("turno");

if (hora < 12) {
    var periodo = "da manhã";
    turno.src="img/manha.png"
    title.innerHTML="Bom dia!";
} else if (hora < 18) {
    periodo = "da tarde";
    turno.src="img/tarde.jpg"
    title.innerHTML="Boa tarde!";
} else {
    periodo = "da noite";
    turno.src="img/noite.jpg"
    title.innerHTML="Boa noite!";
}

text.innerHTML=`São ${hora} Horas ${periodo}`;