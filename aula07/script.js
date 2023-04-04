var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 6
var minutos = data.getMinutes()

msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
if (hora >= 0 && hora <=12) {
  
  img.src = 'fotomanha.png'
  document.body.style.background = '#a1bccf'
  

}else if (hora >=12 && hora <=18){
  //BOA TARDE
  img.src = 'fototarde.png'
  document.body.style.background = '#ede0aa'
}else{ 
  img.src= 'fotonoite.png'
  document.body.style.background = '#5e5b51'
  //BOA NOITE
}