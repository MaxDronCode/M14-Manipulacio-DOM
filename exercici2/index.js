function init() {
  let $miDiv = document.createElement('div')
  $miDiv.textContent = "Clíca'm"
  $miDiv.style.textAlign = 'center'
  $miDiv.style.lineHeight = '100px'
  $miDiv.style.width = '200px'
  $miDiv.style.height = '100px'
  $miDiv.style.backgroundColor = 'red'
  $miDiv.style.borderRadius = '5px'

  $miDiv.addEventListener('click', () => {
    $miDiv.style.backgroundColor = 'rgb(' + colorAleatori() + ',' + colorAleatori() + ',' + colorAleatori() + ')'
    $miDiv.style.width = Math.floor(Math.random() * 200 + 100) + 'px'
    $miDiv.style.height = Math.floor(Math.random() * 100 + 50) + 'px'
    $miDiv.style.lineHeight = $miDiv.style.height
  })

  document.body.appendChild($miDiv)
}

function colorAleatori() {
  return Math.floor(Math.random() * 256)
}
