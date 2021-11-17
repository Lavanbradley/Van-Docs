var box = document.querySelector('.box')
var btn = document.querySelector('#btn').addEventListener('click', function () {
  box.style.height = '400px'
  box.style.width = '400px'
})

box.addEventListener('mouseover', function () {
  box.style.backgroundColor = "red"
})