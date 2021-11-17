var first = document.querySelector('.first')
var last = document.querySelector('.last')
var lName = document.querySelector('.lName')
var fName = document.querySelector('.fName')
var btn = document.querySelector('.btn')
var num = document.querySelector('.num')
btn.addEventListener("click", test)

function test(e) {
  e.preventDefault()
  fName.innerHTML = first.value
  lName.innerHTML = last.value
  num.innerHTML = 5 + 5
}


