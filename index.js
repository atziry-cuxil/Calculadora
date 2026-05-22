let botones = document.querySelectorAll('.btn')
let iput = document.querySelector('#pantalla')

botones.forEach(btn => {
    btn.addEventListener('click', (event) => {
        input.value += event.target.textContent
    })
})
