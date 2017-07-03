var a = [15,  29, 78, 29, 40, 20, 18, 100, 78, 68];
numpar = "";
numimpar= "";
for (var i=0 ; i < a.length-1; i++){

 if (i%2==0){
   numpar+= a[i]+" ";
   console.log("Numeros pares:" +numpar);
 }else{
   numimpar+= a[i]+ " ";
   console.log("Numeros impares:" +numimpar);
 }

}
console.log("Elementos de posicion par: "+ numpar);
console.log("Elementos de posicion impar: "+ numimpar);
