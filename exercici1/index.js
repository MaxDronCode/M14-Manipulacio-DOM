function canviarTitol() {
  let nouTitol = document.getElementById("nouTitol").value
  let $titol = document.querySelector('h1')

  $titol.textContent = nouTitol
}

function modificarText() {
  let $paragraf = document.querySelector('p')
  $paragraf.textContent = 'Aquest és el nou text del paràgraf'
}

function afegirElement() {
  let txtNou = document.getElementById("nouText").value
  let $ul = document.querySelector('ul')

  let $nouElement = document.createElement('li')
  $nouElement.textContent = txtNou

  $ul.appendChild($nouElement)
}
