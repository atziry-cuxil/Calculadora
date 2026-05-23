let botones = document.querySelectorAll('.btn')
let input = document.querySelector('#pantalla')

botones.forEach(btn => {
    btn.addEventListener('click', (event) => {

        // input.value += event.target.textContent

        let signos = "/*-+.%"

        if (input.value.length == 0) {
            if (!signos.includes(event.target.textContent)) {
                input.value += event.target.textContent
            }
        } else {

            if (signos.includes(event.target.textContent)) {
                if (input.value.length[input.value.length - 1]) {
                    input.value.replace(input.value[input.value.length - 1], event.target.textContent)
                }
            } else {
                input.value += event.target.textContent
            }
        }
    })
})

