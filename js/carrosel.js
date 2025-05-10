const elementos = document.querySelector('.carrosel-over')
const prevBnt = document.querySelector ('.seta-left')
const nextBnt = document.querySelector ('.seta-right')

let pixels = 0

prevBnt.addEventListener('click', function(){
  pixels -= 20
  elementos.style = `transform: translateX(${pixels}%)`
})

nextBnt.addEventListener('click', function(){
  pixels += 20
  elementos.style = `transform: translateX(${pixels}%)`
})