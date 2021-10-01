// função, criando uma função para criar elementos
function criaTag(elemento) {
  return document.createElement(elemento)
}

// criando tabela com javaScript
let titulo = document.querySelector('section h1')
titulo.textContent = "Tabela de frutas"

let tabela = document.getElementById('tabela')

let thead = criaTag('thead')
let tbody = criaTag('tbody')
let tfoot = criaTag('tfoot')

// criando tabela dinamica, também adicionar mais indices
let indicesTabela = ["Indice", "Frutas", "Preços"]
let linhaHead = criaTag('tr')

// função, criando colunas
function criaCelula(tag, text) {
  tag = criaTag(tag)
  tag.textContent = text
  return tag
}
for (let j = 0; j < indicesTabela.length; j++) {
  let th = criaCelula('th', indicesTabela[j]) 
  linhaHead.appendChild(th)
}
thead.appendChild(linhaHead)

// criando linhas da tabelas
for (let j = 0, linhasBody = ''; j < linhasTabela.length; j++) {
  linhasBody = criaTag("tr")
  linhasBody.appendChild(criaCelula("td", (j + 1)))
  if (j % 2 != 0) {
    linhasBody.setAttribute("class", "listrado")
  }
  for (let i = 0, cel = ''; i < linhasTabela[j].length; i++) {
    cel = criaCelula("td", linhasTabela[j][i])
    linhasBody.appendChild(cel)
  }
  tbody.appendChild(linhasBody)
}

// criando foot
let linhaFoot = criaTag("tr")
let celulaFoot = criaCelula("td", "listas de feiras")
celulaFoot.setAttribute("colspan", 3)
linhaFoot.appendChild(celulaFoot)
tfoot.appendChild(linhaFoot)


tabela.appendChild(thead)
tabela.appendChild(tbody)
tabela.appendChild(tfoot)