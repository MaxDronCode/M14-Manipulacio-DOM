function afegirProducte() {

  let $input = document.querySelector('input')
  if ($input.value === '') return
  let $ul = document.querySelector('ul')
  let $li = document.createElement('li')
  $li.textContent = $input.value
  $input.value = ''

  let $check = document.createElement('input')
  $check.type = 'checkbox'
  $check.addEventListener('change', (e) => {
    if (e.target.checked) {
      $li.style.textDecoration = 'line-through'
    } else {
      $li.style.textDecoration = 'none'
    }
  })

  let $boto = document.createElement('button')
  $boto.textContent = 'Eliminar'
  $boto.addEventListener('click', () => {
    $ul.removeChild($li)
  })

  $li.appendChild($check)
  $ul.appendChild($li)
  $li.appendChild($boto)

}

function init() {
  let $form = document.querySelector('form')
  $form.addEventListener('submit', (e) => {
    e.preventDefault()
    afegirProducte()
  })
}
