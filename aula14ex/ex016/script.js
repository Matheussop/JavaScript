function contar(){
    var inicio = window.document.getElementById('txti');
    var fim = window.document.getElementById('txtf');
    var pulo = window.document.getElementById('txtp');
    var res = window.document.getElementById('res');
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(pulo.value);
    if(i == 0 && f == 0 && p == 0){
        res.innerHTML = 'Impossivel Contar, dados invalidos';
    }else if(i == 0){
        res.innerHTML = 'Impossivel Contar, inicio invalido';
        res.innerHTML = '';
    }else if(p == 0){
        res.innerHTML = 'Impossivel Contar, passo invalido';
    }else if(f < i){
        //Contagem regressiva
        res.innerHTML = 'Contando: <br>';
        while(i >= f){
            if(i != f){
                res.innerHTML += `${i} \u{1F449}`;
            }else{
                res.innerHTML += `${i} \u{1F6A9} `;
            }
                i -= p;
        }
    }else{ 
        //Contagem crescente
        res.innerHTML = 'Contando ';
        while(i <= f){
            if(i != f){
                res.innerHTML += `${i} \u{1F449}`;
            }else{
                res.innerHTML += `${i} \u{1F6A9} `;
            }
                i += p;
        }
    }
}
