var numero = -3;

if(numero >= 0 && numero % 2 == 0){
    console.log('o número ', numero,' é positivo e par!');
}else if(numero >= 0 && numero % 2 == 1){
    console.log('o número ', numero,' é positivo e ímpar!');
}else if(numero <= 0 && numero % 2 == 0){
    console.log('o número ', numero,' é negativo e par!');
}else{
    console.log('o número ', numero,' é negativo e  ímpar!'); 
}