function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')

  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'Homem'

      //verificação para atribuir uma foto
      if (idade >= 0 && idade < 10) {
        // É Criança
        img.setAttribute('src', 'Crianca-H.jpg')
      } else if (idade < 21) {
        // É Jovem
        img.setAttribute('src', 'Jovem-H.jpg')
      } else if (idade < 50) {
        //É adulto
        img.setAttribute('src', 'Adulto.jpg')
      } else {
        // É idoso
        img.setAttribute('src', 'Idoso.jpg')
      }

    } else if (fsex[1].checked) {
      genero = 'Mulher'

      //verificação para atribuir uma foto
      if (idade >= 0 && idade < 10) {
        // É Criança
        img.setAttribute('src', 'Crianca-M.jpg')
      } else if (idade < 21) {
        // É Jovem
        img.setAttribute('src', 'Jovem-M.jpg')
      } else if (idade < 50) {
        //É adulto
        img.setAttribute('src', 'Adulta.jpg')
      } else {
        // É idoso
        img.setAttribute('src', 'Idosa.jpg')
      }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}