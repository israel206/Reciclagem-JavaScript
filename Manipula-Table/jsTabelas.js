//variavel
var pessoas, index;

// funçao para inserir o usuario na tabela, com parâmetros
function cadPessoa(nome, sobrenome, email, sexo, profissao) {
  // pegar a tabela que esta no html
  pessoas = document.getElementById('tbPessoas');
  // saber a quantidades de linhas na tabela
  var qtdLinhas = pessoas.rows.length;
  // inserir linhas na tabela
  var linha = pessoas.insertRow(qtdLinhas);

  var linhaParam;

  // inserir colunas/cedulas na tabela
  var cellCodigo = linha.insertCell(0);
  var cellNome = linha.insertCell(1);
  var cellSobrenome = linha.insertCell(2);
  var cellEmail = linha.insertCell(3);
  var cellSexo = linha.insertCell(4);
  var cellProfissao = linha.insertCell(5);

  // inserir o conteudo no campos da tabela
  cellCodigo.innerHTML = qtdLinhas;
  cellNome.innerHTML = nome;
  cellSobrenome.innerHTML = sobrenome;
  cellEmail.innerHTML = email;
  cellSexo.innerHTML = sexo;
  cellProfissao.innerHTML = profissao;

  preenchCamposForm();

}
// Função de alteração dos campos
function alPessoa(nome, sobrenome, email, sexo, profissao) {

  // destribui os parametros nas linhas das tabelas 
  pessoas.rows[index].cells[1].innerHTML = nome;
  pessoas.rows[index].cells[1].innerHTML = sobrenome;
  pessoas.rows[index].cells[1].innerHTML = email;
  pessoas.rows[index].cells[1].innerHTML = sexo;
  pessoas.rows[index].cells[1].innerHTML = profissao;
  
}
// função de loop
function preenchCamposForm() {
  //loop for, navegação nas linhas
  for (var i = 0; i < pessoas.rows.length; i++) {

    // retornando os dados da tabela para o formulario
    pessoas.rows[i].onclick = function () {
      index = this.rowIndex;
      document.getElementById('txtCodigo').value = pessoas.rows[index].cells[0].innerText;
      document.getElementById('txtNome').value = pessoas.rows[index].cells[1].innerText;
      document.getElementById('txtSobrenome').value = pessoas.rows[index].cells[2].innerText;
      document.getElementById('txtEmail').value = pessoas.rows[index].cells[3].innerText;
      document.getElementById('txtSexo').value = pessoas.rows[index].cells[4].innerText;
      document.getElementById('txtProfissao').value = pessoas.rows[index].cells[5].innerText;

    }
  }
}
// função de exclusão dos dados
function delRegistro() {
  for (var i = 0; i < pessoas.rows.length; i++){
    if (index == i) {
      pessoas.deleteRows(index);
      return;
    }
  }
}