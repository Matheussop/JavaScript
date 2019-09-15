function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.getElementById('res');
    var img = document.createElement('img');
    img.setAttribute('id','foto');
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert("[ERRO] Por Favor, verifique os dados e tente novamente");
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value);
        var genero = '';
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade == 0){
                img.setAttribute('src','Fotos/bebe.png');
            }else if(idade > 0 && idade < 12){
                img.setAttribute('src','Fotos/criacahomen.png');
            }else if(idade < 21){
                img.setAttribute('src','Fotos/jovemhomen.png')
            }else if(idade < 65){
                img.setAttribute('src','Fotos/adultohomen.png')
            }else{
                img.setAttribute('src','Fotos/idosohomen.png')
            }
        }else{
            genero = 'Mulher';
            if(idade == 0){
                img.setAttribute('src','Fotos/bebe.png');
            }else if(idade > 0 && idade < 12){
                img.setAttribute('src','Fotos/criancamulher.png')
            }else if(idade < 21){
                img.setAttribute('src','Fotos/jovemmulher.png')
            }else if(idade < 65){
                img.setAttribute('src','Fotos/adultomulher.png')
            }else{
                img.setAttribute('src','Fotos/idosamulher.png')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `<p>Detectamos um(a) ${genero} com ${idade} anos. </p>`
        res.appendChild(img)
    }
}