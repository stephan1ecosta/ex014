function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();
  var dia = data.getDate();
  var mes = data.getMonth();
  var ano = data.getFullYear();
  var mesLiteral = "";
  var estacaoDoAno = "";

  switch (mes) {
    case 0:
      mesLiteral = "Janeiro";
      break;
    case 1:
      mesLiteral = "Fevereiro";
      break;
    case 2:
      mesLiteral = "Março";
      break;
    case 3:
      mesLiteral = "Abril";
      break;
    case 4:
      mesLiteral = "Maio";
      break;
    case 5:
      mesLiteral = "Junho";
      break;
    case 6:
      mesLiteral = "Julho";
      break;
    case 7:
      mesLiteral = "Agosto";
      break;
    case 8:
      mesLiteral = "Setembro";
      break;
    case 9:
      mesLiteral = "Outubro";
      break;
    case 10:
      mesLiteral = "Novembro";
      break;
    case 11:
      mesLiteral = "Dezembro";
      break;
  }
  

  msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos, do dia ${dia} de ${mesLiteral} de ${ano}!`;
  if (hora >= 0 && hora < 12) {
    img.src = "manha.png";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "tarde.png";
    document.body.style.background = "#b9846f";
  } else {
    img.src = "noite.png";
    document.body.style.background = "#515154";
  }
}
