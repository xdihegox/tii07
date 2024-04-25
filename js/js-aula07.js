/* Programa - menu responsivo + modal popUP
*autor Diego carvalho
*licença GNU
*Data 2024/04/11
*versão: V1.0
*/

// menu responsivo usando função
function menu (){
 let menu = document.getElementById("Menu");

 if (menu.style.display == "block"){
    menu.style.display = "none";
}else{
    menu.style.display = "block";
}
}
// modal ou popUP
const modalbnt = document.querySelector(".modal-bnt");
const modal = document.querySelector(".modaloverlay");
const closebnt = document.querySelector(".close-bnt");

// Função privada ao objeto da classe onde ira adicionar uma nova classe, via evento click
modalbnt.addEventListener("click",function(){
     modal.classList.add("open-modal");
});
// função privada ao objeto da clase onde ira remover uma classe via evento cliclk
modalbnt.addEventListener("click",function(){
    modal.classList.remove("open-modal");

});
