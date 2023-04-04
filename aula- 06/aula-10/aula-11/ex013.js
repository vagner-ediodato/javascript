var agora = new Date();
var diaSem = agora.getDay();
/* domingo
segunda
terça
quarta
quinta

sexta
sabado

*/
console.log(`Hj é ${diaSem}`);
switch (diaSem) {
  case 0:
    console.log("domingo");
    break;
  case 1:
    console.log("segunda");
    break;
  case 2:
    console.log("terça");
    break;
  case 3:
    console.log("quarta");
    break;
  case 4:
    console.log("quinta");
    break;
  case 5:
    console.log("sexta");
    break;
  case 6:
    console.log("sabado");
    break;
  case 7:
    console.log("[ERRO] dia invalido");
    break;
}
