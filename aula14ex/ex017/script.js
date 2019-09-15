function gerar(){
    var numero = document.getElementById('n');
    let tab = document.getElementById('seltab');
    let n = Number(numero.value);
    if(numero.value.length == 0){
      window.alert('[Erro], Por Favor digite um numero'); 
    }else{
        tab.innerHTML ='';
        for(var i =  1; i <= 10 ; i++){
            let item = document.createElement('option');
            item.text = `${n} x ${i} = ${n*i}`;
            item.value = `tab${i}`
            tab.appendChild(item);
            URL = '127.0.0.1:61870/html/teste.html/tete.html';
        }
    }
}