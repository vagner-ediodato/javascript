function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = window.document.getElementById("txtano");
  var res = window.document.querySelector("div#res");
  if (fano.value.lenght == 0 || Number(fano.value) > ano) {
    window.alert("verifique de novo");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    res.innerHTML = `idade ${idade}`;

    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade < 2) {
        img.setAttribute("src", "fotobebe-m.png");
      } else if (idade < 12) {
        img.setAttribute("src", "fotomenino.png");
      } else if (idade < 25) {
        img.setAttribute("src", "jovem-m.png");
      } else if (idade < 45) {
        img.setAttribute("src", "adulto-m.png");
      } else {
        img.setAttribute("src", "idoso.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 2) {
        img.setAttribute("src", "fotobebe-f.png");
      } else if (idade < 12) {
        img.setAttribute("src", "fotomenina.png");
      } else if (idade < 25) {
        img.setAttribute("src", "jovem-f.png");
      } else if (idade < 45) {
        img.setAttribute("src", "adulto-f.png");
      } else {
        img.setAttribute("src", "idosa.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
