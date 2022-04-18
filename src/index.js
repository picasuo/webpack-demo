import './index.css'

const btn = document.getElementById('btn')
const num = document.getElementById('num')

btn.addEventListener('click', function () {
  let number = parseInt(num.innerText, 10)
  num.innerText = number + 1
})

class test {
  #a = 1
}

const tt = new test()

console.log('tt', tt)
