const toggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

toggle.addEventListener('click', function () {
  // By if else statement

  // if (links.classList.contains('show-links')) {
  //   links.classList.remove('show-links')
  // } else {
  //   links.classList.add('show-links')
  // }

  // simnply just writing toggle to class list

  links.classList.toggle('show-links')
})
