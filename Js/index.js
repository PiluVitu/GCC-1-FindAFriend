const openButton = document.querySelector('#open')
const closeButton = document.querySelector('#close')
const menu = document.querySelector('.brandAndMenu nav')

openButton.addEventListener('click', () => {
  CloseAndOpenMenu()
})
closeButton.addEventListener('click', () => {
  CloseAndOpenMenu()
})

function CloseAndOpenMenu() {
  openButton.classList.toggle('hide')
  closeButton.classList.toggle('hide')
  menu.classList.toggle('hide')
}
