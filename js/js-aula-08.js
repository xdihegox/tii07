/* criando programando com JQuery */

let pontos =0;

$(document).ready(function(){
    let divpontos = document.getElementById('recorde');
    divpontos.innerHTML = '<P>Ola o seu recorde é de ' + pontos + 'pontos.</p>';

    $('#addpontos').click(function(){
        pontos++;
        divpontos.innerHTML = "<P> Ola seu recorde subiu para <b>" + pontos 
        +" </b> pontos </P>";

    });

});