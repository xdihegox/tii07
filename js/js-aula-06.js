// alert("ola mundo")
/* Manipular matriz via objeto;
 * Autor: Guilherme Domingues;
 * Licença: GNU;
 * Data: 2024/04/10;
 * versão v1.0;
*/

// Criando Objeto para manipular a matriz dentro do JS
// Criar uma função para o Objeto - matrizGrupo
// Esta função só será ativa quando passas as instancias:
// codigo | nome | dataNascimento
function matrizGrupo(codigo,nome,dataNascimento){
    // O objeto irá ser ele mesmo "this" + a instancia e recebe a variavel
    this.codigo = codigo;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
}
// Criar a matriz de manipulação "dados" e a variavel de controle de linha "i"
let dados = new Array(); // let dados = [];
let i = 0;
// Criar as variaveis de entrada
let codigo, nome, dataNascimento;
do{
    //recebendo os dados: codigo, nome, datanascimento
    codigo = i + i;
    nome = prompt("Digite o nome ");
    dataNascimento = prompt("Digite a data de nascimento");
    // Gravandoos dados  na matriz com uso do objeto
    dados[i]= new matrizGrupo(codigo,nome,dataNascimento);
    //incremento de 1 na variavel de controle "i"
    i++;
    resp = prompt("Digite(1) para colocar um novo usuario ou (2) para sair")

}while (resp ==1)

// Recebendo os dados: codigo, nome, dataNascimento
codigo = 1;
nome = "Diego";
dataNascimento = "23/05/000";
// Gravando os dados na matriz com uso do objeto
dados[i] = new matrizGrupo(codigo,nome,dataNascimento);
// Incrimento de 1 na variavel de controle "i"
i++;

codigo = 2;
nome = "Romero";
dataNascimento = "09/04/2024";

dados[i] = new matrizGrupo(codigo,nome,dataNascimento);
i++;

codigo = 3;
nome = "Yuri Alberto";
dataNascimento = "04/09/2023";

dados[i] = new matrizGrupo(codigo,nome,dataNascimento);
i++;
// Criar variavel para pear a quantidade de linhas da matriz "dados"
let j = dados.length;

console.log(dados)

//Criar uma função "exibaDados" para impressão da matriz de uma tabela em html
function exibaDados(){
    let dataGrid;
    dataGrid = "<table><tr><td>Código</td><td>Nome</td><td>Data de Nascimento</td></tr>";

    // Loop de repetição para carregar as linhas da matriz
    for(i=0;i<j;i++){
        dataGrid = dataGrid + ("<tr><td>" + dados[i].codigo + "</td>");
        // Outra forma de atribuir o valor ele mesmo + o proximo
        dataGrid += ("<td>" + dados[i].nome + "</td>");
        dataGrid += ("<td>" + dados[i].dataNascimento + "</td></tr>");
    }
    dataGrid += "</table>";

    let resp = document.getElementById("result");
    // Inserindo o dataGrid na resp para imprimir no HTML
    resp.innerHTML = dataGrid;

}