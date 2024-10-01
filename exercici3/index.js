function modificarText() {
  let $parraf = document.getElementById('textMirroring')
  let $input = document.getElementById('inputId')
  $parraf.textContent = $input.value
}

function init() {
  let $form = document.querySelector('form')
  $form.addEventListener('submit', (event) => {
    event.preventDefault()
    modificarText()
  })
}
