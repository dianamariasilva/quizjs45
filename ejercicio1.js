var numero1= prompt("Ingrese  número1");
var numero2= prompt("Ingrese  número2");
var numero3= prompt("Ingrese numero3");

if (numero1 > numero2 && numero1 >numero3 && numero2< numero3){
  console.log ("Máximo = "+numero1 + " Mínimo = "+numero2);
}else if (numero2 > numero1 && numero2 > numero3 && numero1 <numero3){
  console.log ("Máximo = " +numero2 +" Mínimo = "+numero1);
}else if (numero1 > numero2&& numero1 >numero3 && numero3< numero2){
  console.log("Máximo = "+numero1 + " Mínimo = "+numero3);
}else if(numero2 > numero1 && numero2 > numero3 && numero3 <numero1){
  console.log ("Máximo = "+numero2 + " Mínimo = "+numero3);
}else if (numero3 > numero1 && numero3 > numero2 && numero1 <numero2){
  console.log ("Máximo = "+numero3 + " Mínimo = "+numero1);
}else{
  console.log ("Máximo = "+numero3 + " Mínimo = "+numero2);
}
