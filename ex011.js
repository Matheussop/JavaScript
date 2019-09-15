var idade = 65 ;
var comp = 16 // variavel a ser comparada 
if(idade < comp){
    console.log('Nao vota ');
}else if(idade < 18 || idade >= 65){
   console.log('Voto opcional');
}else{
    console.log('Voto obrigatório');
}