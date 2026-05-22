let info = [];
let btn = document.querySelectorAll('.btn')
let input = document.querySelector('#pantalla')

btn.addEventListener('click', (event) => {
    let pintar = event.target.id
    calculadora.forEach(item => item.id == pintar ? valor = item.value : item)
    input.value = valor
})



// let botones = document.querySelectorAll('.btn')
// let iput = document.querySelector('#pantalla')

// botones.forEach(btn => {
//     btn.addEventListener('click', (event) => {
//         input.value += event.target.textContent
//     })
// })
